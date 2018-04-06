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
      apiSources: [],
      sources: [],
      articles: [],
    }
  }

  resetSources = () => {
    const sources = this.state.apiSources.slice(0)
    this.setState({sources: sources})
  }

  fetchSources = () => {
    Api.fetchSources()
      .then((res) => {
        const sources = res.length > 0 ? res : []

        this.setState({
          apiSources: sources,
          sources: sources
        })
      })
      .catch((error) => {
        console.log(`error ${error}`)
      })
  }

  fetchArticles = (source) => {
    Api.fetchArticles(source)
      .then((res) => {
        const articles = res.length > 0 ? res : []

        this.setState({
          articles: articles
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  filterSources = (filter) => {
    if(filter === '') {
      this.resetSources()
      return false
    }

    filter = filter.toLowerCase()
    const filterLength = filter.length    
    const sources = this.state.apiSources.slice(0)
    let filteredSources = []

    for(let i = 0; i < sources.length; i++) {
      const srcID   = sources[i].id.slice(0, filterLength)
      const srcName = sources[i].name.slice(0, filterLength)

      if(srcID === filter || srcName === filter ){
        filteredSources.push(sources[i])
      }
    }

    if(filteredSources.length > 0) {
      this.setState({sources: filteredSources})
    } else {
      this.resetSources()
    }
  }

  componentDidMount(){
    this.fetchSources()
    this.fetchArticles()
  }

  render() { 
    return (
      <div className="App container" >
        <div className='row'>
          <Search onInput={this.filterSources} />
        </div>
        <div className='row'>
          <Sources  sources={this.state.sources} onClick={this.fetchArticles} />
          <Articles articles={this.state.articles} />
        </div>
      </div>
    );
  }
}