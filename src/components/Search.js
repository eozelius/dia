import React, { Component } from 'react'

export default class SourcesFilter extends Component {
  handleInput = (e) => {
    e.preventDefault()
    const query = e.target.value
    console.log(`SEARCH.js query: ${query}`)
    this.props.onInput(query)
  }

  render() {
    return (
      <div className="search col-12">
        <h1 className='title'>Search News Sources</h1>
        <input onInput={(e) => this.props.onInput(e.target.value)} type='text' name='source' placeholder='example: CNN, ABC News...' />
      </div>
    );
  }
}