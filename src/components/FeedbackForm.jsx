import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    let [btnDisabled, setBtnDisabled] = useState(true)
    let [message, setMessage] = useState("")

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10){
            setMessage(`You Need to write at least ${10 - (text.length - 1)} more characters`)
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            handleAdd(newFeedback)
            // Rest the text
            setText("")
        }
    }   

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How Would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                <Button version={"primary"} type={"submit"} isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm