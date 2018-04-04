import React, { Component } from 'react'

export default class Articles extends Component {
  render() {
    const articles = (this.props.articles || []).map((article, index) => (
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
    ))

    return(
      <div className='articles col-6'>
        <h3 className='title'>Articles</h3>
        {articles}
      </div>
    )
  }
}
