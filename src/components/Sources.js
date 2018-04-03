import React, { Component } from 'react'
import PropTypes from 'prop-types'  

export default class Sources extends Component {
  handleClick = (source_id) => {
    console.log(source_id)
    this.props.onClick(source_id)
  }

  render() {
    const sources = (this.props.sources || []).map((source) => (
      <div onClick={() => this.handleClick(source.id)} className='source' key={source.name}>
        <p>{source.name}</p>
      </div>
    ))

    return (
      <div className='sources col-6'>
        <h3 className='title'>Sources</h3>
        {sources}
      </div>
    )
  }
}

Sources.propTypes = { 
  sources: PropTypes.array.isRequired
}

Sources.defaultProps = {
  sources: []
}


