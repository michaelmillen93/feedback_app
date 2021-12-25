import {useState} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'


function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisbaled] = useState(true)
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

           handleAdd(newFeedback)

           setText('')
        }

    }
   


    const handleTextChange = (e) => {

        if (text === '') {
            setbtnDisbaled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setbtnDisbaled(true)
            setMessage('Review must be at least 10 characters')
        } else {
            setMessage(null)
            setbtnDisbaled(false)
        }

        setText(e.target.value)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
            
                <RatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input value={text} onChange={handleTextChange} type="text" placeholder="Write a review" />
                    <Button isDisabled={btnDisabled} type='submit'>Submit</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
