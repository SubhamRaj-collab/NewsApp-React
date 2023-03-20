import React, { Component } from 'react'
import load from '../spinner.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-5' src={load} alt="loading.." />
      </div>
    )
  }
}

export default Loader