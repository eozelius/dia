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
    }
  }

  fetchSources = () => {
    Api.fetchSources()
      .then((res) => {
        let fetchedSources

        if(res.length > 0) {
          fetchedSources = res
        } else {
          fetchedSources = []
        }

        this.setState({
          sources: fetchedSources
        })
      })
      .catch((error) => {
        console.log(`error ${error}`)
      })
  }

  fetchArticles = (source) => {
    Api.fetchArticles(source)
      .then((res) => {
        let articles
        
        if(res.length > 0){
          articles = res
        } else {
          articles = []
        }

        this.setState({
          articles: articles
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  filterSources = (source_id) => {
    console.log('App#filterSources() => ' + source_id)
    const sources = [...this.state.sources]
    console.log(sources)

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