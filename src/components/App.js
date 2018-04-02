import React, { Component } from 'react'

import Api from '../Api.js'
import Search from './Search.js'
import Sources from './Sources.js'
import Articles from './Articles.js'
import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sources: [],
      articles: null
    }
  }

  componentDidMount(){
    Api.fetchSources()
      .then((sources) => {
        console.log(sources)
        this.setState({sources: sources})
      })
      .catch((error) => {
        console.log(`error ${error}`)
      })
  }

  render() {
    return (
      <div className="App container" >
        <div className='row'>
          <Search />
        </div>
        <div className='row'>
          <Sources sources={this.state.sources} />
          <Articles articles={this.state.articles} />
        </div>
      </div>
    );
  }
}