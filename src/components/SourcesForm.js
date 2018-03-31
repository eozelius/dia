import React, { Component } from 'react';

class SourcesForm extends Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    const query = e.target.value
    console.log(`query: ${query}`)
    this.props.onInput(query)
  }

  render() {
    return (
      <div className="search-sources">
        <h1>Search News Sources</h1>
        <form className='search-sources'>
          <input onInput={this.handleInput} type='text' name='source' placeholder='example: CNN, ABC News...' />
        </form>
      </div>
    );
  }
}

export default SourcesForm
