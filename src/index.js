import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Content from './components/Content'

class Root extends Component {
  render() {
    return (
      <div className='container-fluid' id='master-container' style={{ padding: '20px 50px' }}>
        <Content />
      </div>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById('root'))
