import React, { Component } from 'react'
import SourcesForm from './SourcesForm.js'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchSources = this.fetchSources.bind(this)
  }

  fetchSources(source){
    console.log('fuck your source: ' + source)
  }

  render() {
    return (
      <div className="App">
        <SourcesForm onInput={this.fetchSources} />
      </div>
    );
  }
}

export default App;
