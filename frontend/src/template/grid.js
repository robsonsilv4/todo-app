import React, { Component } from 'react'

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if (cols[0]) classes += `col-sm-${cols[0]}`
    if (cols[1]) classes += `col-md-${cols[1]}`
    if (cols[2]) classes += `col-lg-${cols[2]}`
    if (cols[3]) classes += `col-xl-${cols[3]}`
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12)
    return <div className={gridClasses}>{this.props.children}</div>
  }
}
