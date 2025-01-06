import PropTypes from 'prop-types'

import Card from "./shared/Card"


const FeedbackItem = ({item,handleDelete}) => {
    
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>handleDelete(item.id)}>
        x
      </button>
      <div className="text-display">
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.PropTypes = {
  item:PropTypes.object
}
export default FeedbackItem
