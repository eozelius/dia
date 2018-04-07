import React, { Component } from 'react'
import PropTypes from 'prop-types'  

export default class Articles extends Component {

  toggleAscending() {
    this.props.toggleAscending()
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
    const articles = this.props.articles.map((article, index) => this.renderArticle(article, index))

    return (
      <div className='articles col-6'>
        <h3 className='title'>Articles</h3>
        <div onClick={() => this.toggleAscending()} className='sort-articles'>
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