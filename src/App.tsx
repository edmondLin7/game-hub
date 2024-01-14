import { Grid, GridItem, Show} from "@chakra-ui/react"

function App() {
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
      <GenreList />
    </GridItem>
    </Show>
    <GridItem area='main' bg='navyblue'>
      <GameGrid />
    </GridItem>
  </Grid>
)}
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

export default App
