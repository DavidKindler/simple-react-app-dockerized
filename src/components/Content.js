import React, { Component } from 'react'
import Clock from './Clock'

class Content extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <React.Fragment>
        <div className='row'>
          <h1>It Works!!! </h1>
        </div>
        <Clock />
      </React.Fragment>
    )
  }
}

export default Content
