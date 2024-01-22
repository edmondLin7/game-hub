import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Box, Flex, Grid, GridItem, HStack, Show} from "@chakra-ui/react"
import { Platform } from './hooks/usePlatforms'
import "./index.css";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  //const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  //const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);


  return (
  <Grid 
    templateAreas= {{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area='nav'>
      <NavBar onSearch = {(searchText) => setGameQuery({ ...gameQuery, searchText})} />
    </GridItem> 
    <Show above="lg">
    <GridItem area='aside' bg='navyblue' paddingX={5}>
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
    </GridItem>
    </Show>
    <GridItem area='main' bg='navyblue'>
      <GameHeading gameQuery={gameQuery} />
      <Box paddingLeft={2}>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform})}/>
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({
            ...gameQuery, sortOrder })}/>
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
)}

export default App
