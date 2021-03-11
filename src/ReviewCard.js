import './css-files/Karma.css'

function ReviewCard ({review}) {
    return (
        <div className = 'review-card'>
        <h3 >{review.review} - {review.reviewer}</h3>
        <br />
        <h4>{review.karma} stars!</h4>
        </div>
    )
}

export default ReviewCard