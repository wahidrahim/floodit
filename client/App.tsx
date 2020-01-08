import React from 'react'
import Cell from './components/cell/cell.component'
import Grid from './components/grid/grid.component'

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Cell color={1} />
        <Cell color={2} />
        <Cell color={3} />
        <Cell color={4} />
      </Grid>
    )
  }
}

export default App
