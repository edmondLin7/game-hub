import { Grid, GridItem, Show} from "@chakra-ui/react"

function App() {
  return (
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav'>
      <NavBar/>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='gold'>
      Aside
    </GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue'>
      Main
    </GridItem>
  </Grid>
)}
import NavBar from "./components/NavBar"

export default App
