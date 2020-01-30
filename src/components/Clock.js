import React, { Component } from 'react'

//const cx = cn.bind(styles)

class Clock extends Component {
  constructor (props) {
    super(props)
    this.count = this.count.bind(this)
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.x = null
  }
  count () {
    var time = new Date().toLocaleTimeString()
    this.setState({ time })
  }
  componentDidMount () {
    this.x = setInterval(this.count, 1000)
  }

  render () {
    const { time } = this.state
    return (
      <div className='row'>
        <h2>Time Now: {time}</h2>
      </div>
    )
  }
}

export default Clock
