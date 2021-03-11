function ReviewCard ({review}) {
    return (
        <div>
        <h1>{review.review} - {review.reviewer}</h1>
        <br />
        <h3>{review.karma} stars!</h3>
        </div>
    )
}

export default ReviewCard