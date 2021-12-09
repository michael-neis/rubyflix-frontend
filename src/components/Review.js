

function Review ({review}) {

    if (!review) return null

    return(
        <div>
            <h2>My Rating: {review.star_rating}/10</h2>
            <h3>My Review:</h3>
            <p>{review.comment}</p>
        </div>
    )
}

export default Review