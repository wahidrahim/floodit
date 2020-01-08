import React from 'react'

import './grid.styles.scss'

class Grid extends React.Component {
  render() {
    return <div className="grid">{this.props.children}</div>
  }
}

export default Grid
