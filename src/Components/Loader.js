import React, { Component } from 'react'
import load from '../spinner.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="loading.." />
      </div>
    )
  }
}

export default Loader