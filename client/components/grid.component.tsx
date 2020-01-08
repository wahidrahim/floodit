import React from 'react'

interface GridProps {
  children: React.Component
}

const Grid = (props: GridProps) => {
  return <div className="grid">{props.children}</div>
}

export default Grid
