import React, { Component } from 'react'
import PropTypes from 'prop-types'  

export default class Sources extends Component {

  render() {
    const sources = (this.props.sources || []).map((source) => (
      <div className='source' key={source.name}>
        <p>{source.name}</p>
      </div>
    ))

    return (
      <div className='sources col-6'>
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


