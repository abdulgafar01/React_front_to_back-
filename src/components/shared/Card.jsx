import PropTypes from 'prop-types'

import React from 'react'

const Card = ({children, reverse}) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}


Card.defaultProps = {
    reverse : false,
  }
  
  Card.PropTypes = {
    Children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
  }
  

export default Card
