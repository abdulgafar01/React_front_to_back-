import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
    const[text, setText] = useState("")
    const[btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const[message, setMessage] = useState("")


    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null) 
    
          } else if (text.trim().length < 10) { 
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
          } else {
            setMessage(null) 
            setBtnDisabled(false)
          }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim().length > 10) {
            const newFeedback = {
              text,
              rating,
            }
           handleAdd(newFeedback)
           setText("")
        }
         

    }



  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>how would you rate your service with us</h2>
            <RatingSelect select={rating => setRating(rating)}/>
            <div className="input-group">
                <input 
                placeholder='write a review'
                type='text'
                onChange={handleTextChange}
                value={text}
                              
                />
                <Button type='submit' isDisabled={btnDisabled}>
                    send
                </Button>
            </div>
 
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
