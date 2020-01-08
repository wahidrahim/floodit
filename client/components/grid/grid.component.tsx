import React from 'react'

import './grid.styles.scss'

interface GridProps {
  rows?: number
  cols?: number
}

class Grid extends React.Component<GridProps> {
  gridStyles = {
    width: 200,
    height: 200,
    gridTemplateColumns: '',
    gridTemplateRows: ''
  }

  constructor(props: GridProps) {
    super(props)

    // TODO: ensure children must be present, to avoid nullish coellescing, and not-null identifiers
    const numberOfChildren = this.props.children?.valueOf().length // Children array length
    let cellSizes = ''

    for (let i = 0; i < numberOfChildren! / 2; i++) {
      cellSizes += `${100 / (numberOfChildren! / 2)}%`
    }

    this.gridStyles.gridTemplateColumns = cellSizes
    this.gridStyles.gridTemplateRows = cellSizes
  }

  render() {
    return (
      <div className="grid" style={this.gridStyles}>
        {this.props.children}
      </div>
    )
  }
}

export default Grid
