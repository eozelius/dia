import React, { Component } from 'react'

export default class SourcesFilter extends Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    e.preventDefault()
    const query = e.target.value
    console.log(`query: ${query}`)
    // this.props.onInput(query)
  }

  render() {
    return (
      <div className="search-sources col-12">
        <h1>Search News Sources</h1>
        <input onInput={this.handleInput} type='text' name='source' placeholder='example: CNN, ABC News...' />
      </div>
    );
  }
}