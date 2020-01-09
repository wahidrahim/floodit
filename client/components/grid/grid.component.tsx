import React, { FunctionComponent } from 'react'
import { ICellProps } from '../cell/cell.component'

import './grid.styles.scss'

interface IGridProps {
  rows?: number
  cols?: number
  children: Array<React.ReactElement<ICellProps>>
}

const Grid: FunctionComponent<IGridProps> = props => {
  const gridStyles = {
    width: 200,
    height: 200,
    gridTemplateColumns: '',
    gridTemplateRows: ''
  }

  // Set cell sizes
  const numberOfCells = props.children.length
  const gridSize = numberOfCells / 2
  let cellSizes = ''

  for (let i = 0; i < gridSize; i++) {
    cellSizes += `${100 / gridSize}%` // e.g. "50%50%", or "25%25%25%25%", etc...
  }

  gridStyles.gridTemplateColumns = cellSizes
  gridStyles.gridTemplateRows = cellSizes

  return (
    <div className="grid" style={gridStyles}>
      {props.children}
    </div>
  )
}

export default Grid
