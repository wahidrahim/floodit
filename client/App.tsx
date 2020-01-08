import React from 'react'
import Cell from './components/cell.component'

class App extends React.Component {
  render() {
    return (
      <div className="grid">
        <Cell color={1} />
        <Cell color={2} />
        <Cell color={3} />
        <Cell color={4} />
      </div>
    )
  }
}

export default App
