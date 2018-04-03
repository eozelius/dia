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
      articles: [],
      displaySource: 'Articles'
    }
  }

  fetchSources = () => {
    console.log('APP.js::fetchSources()')

    Api.fetchSources()
      .then((sources) => {
        let fetchedSources
        let displaySource

        if(sources.length > 0) {
          fetchedSources = sources
          displaySource = sources[0].name
        } else {
          fetchedSources = []
          displaySource = 'Articles'
        }

        this.setState({
          sources: fetchedSources,
          displaySource: displaySource
        })
      })
      .catch((error) => {
        console.log(`error ${error}`)
      })
  }

  fetchArticles = (source) => {
    console.log(`APP.js::fetchArticles()`)

    Api.fetchArticles(source)
      .then((articles) => {
        let myArticles

        if(articles[0]){
          myArticles = articles
        } else {
          myArticles = []
        }

        this.setState({
          articles: myArticles
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount(){
    this.fetchSources()
    this.fetchArticles()
  }

  render() { 
    return (
      <div className="App container" >
        <div className='row'>
          <Search onInput={this.fetchSources} />
        </div>
        <div className='row'>
          <Sources sources={this.state.sources} />
          <Articles articles={this.state.articles} source={this.state.displaySource} />
        </div>
      </div>
    );
  }
}