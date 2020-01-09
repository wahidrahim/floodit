import React, { FunctionComponent } from 'react'

export interface ICellProps {
  color: number | string
}

const Cell: FunctionComponent<ICellProps> = ({ color }) => {
  return <div className="cell">{color}</div>
}

export default Cell
