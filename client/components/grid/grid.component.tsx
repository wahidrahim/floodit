import React from 'react'

import './grid.styles.scss'

interface GridProps {
  rows?: number
  cols?: number
}

class Grid extends React.Component<GridProps> {
  width = 200
  height = 200
  gridCellSizes = ''

  constructor(props: GridProps) {
    super(props)

    // TODO: ensure children must be present, to avoid nullish coellescing, and not-null identifiers
    const numberOfChildren = this.props.children?.valueOf().length // Children array length
    const CellSize = 100 / (numberOfChildren! / 2)

    for (let i = 0; i < numberOfChildren! / 2; i++) {
      this.gridCellSizes += `${CellSize}%`
    }
  }

  render() {
    return (
      <div
        className="grid"
        style={{
          width: this.width,
          height: this.height,
          gridTemplateColumns: this.gridCellSizes,
          gridTemplateRows: this.gridCellSizes
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Grid
