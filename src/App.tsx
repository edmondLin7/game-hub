import { Grid, GridItem, Show} from "@chakra-ui/react"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
      <NavBar/>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='navyblue' paddingX={5}>
      <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
    </GridItem>
    </Show>
    <GridItem area='main' bg='navyblue'>
      <PlatformSelector />
      <GameGrid selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>
)}
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

export default App
