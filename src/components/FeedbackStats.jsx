import PropTypes from 'prop-types'


function FeedbackStats({ feedback }) {
    let average = feedback.reduce((acc, current) => { 
        return (acc + current.rating) 
    }, 0) / feedback.length

    average = average.toFixed(1);


    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews </h4>
            <h4>Average Rating: {average ? average : 0}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
