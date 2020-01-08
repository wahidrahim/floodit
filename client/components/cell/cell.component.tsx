import React from 'react'

interface CellProps {
  color: number | string
}

class Cell extends React.Component<CellProps> {
  render() {
    return <div className="cell">{this.props.color}</div>
  }
}

export default Cell
