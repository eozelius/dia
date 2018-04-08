import React, { Component } from 'react'
import PropTypes from 'prop-types'  

export default class Articles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: props.articles,
      ascending: true
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      articles: nextProps.articles
    }
  }

  toggleAscending = () => {
    const articles = this.state.articles.slice(0)

    articles.sort((a,b) => {
      let first_date = new Date(a.publishedAt)
      let next_date = new Date(b.publishedAt)
      return first_date - next_date
    })

    if(this.state.ascending){
      articles.reverse()
    }

    this.setState({
      articles: articles,
      ascending: !this.state.ascending
    })
  }
  
  renderArticle(article, index) {
    return (

      <div className='article card' key={index} >
        <div className='card-header'>
          <h6>{article.title}</h6>
        </div>

        <div className='card-body'>
          <p className='card-text'> 
            {article.description}
          </p>
          <a href={article.url} target="_blank">
            <button type="button" className="btn btn-outline-info">read more</button>
          </a>
        </div>
      </div>
    )
  }

  render() {
    const articles = this.state.articles.map((article, index) => this.renderArticle(article, index))

    return (
      <div className='articles col-6'>
        <h3 className='title'>Articles</h3>
        <div onClick={this.toggleAscending} className='sort-articles'>
          <p className='active'>latest</p>
          <p> | </p>
          <p>oldest</p>
        </div>
        {articles}
      </div>
    )
  }
}

Articles.propTypes = { 
  articles: PropTypes.array.isRequired
}

Articles.defaultProps = {
  articles: []
}