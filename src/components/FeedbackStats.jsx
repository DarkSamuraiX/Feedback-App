
function FeedbackStats({ feedback }) {
    const feedbackSize = feedback.length;
    const average = (feedback.reduce((acc,cur) => {
        return acc + cur.rating
    }, 0) / feedbackSize).toFixed(1).replace(/[.,]0$/,'')

  return (
        <div className="feedback-stats">
            <h4>{feedbackSize} Reviews</h4>
            <h3>Feedback Score: {isNaN(average) ? 0 : average}</h3>
        </div>
  )
}

export default FeedbackStats