import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function ExactDetails ({movie, watchlistMovies, reviewedMovies, handleEditReview, handleCreateReview, handleRemoveFromWatchlist, handleAddToWatchlist, user}) {

    if (!movie)
    window.location.href = "http://localhost:3000";

    const [formBool, setFormBool] = useState(false)

    const movieId = movie.id
    const allMovieIdsWatch = watchlistMovies.map(movie => movie.id)
    const allMovieIdsRev = reviewedMovies.map(movie => movie.id)

    const review = allMovieIdsRev.includes(movieId) ? user.reviews.find(review => review.movie_id === movie.id) : null

    const handleFormBool = () => {
        setFormBool(false)
    }

    return(
        <DetailsDiv>
            <img src="https://simg.nicepng.com/png/small/246-2469081_jake-adventure-time-and-jake-the-dog-image.png" alt="Pimcr"/>
            <h1>{movie.title}</h1>
            <h2>Director: {movie.director.first_name} {movie.director.last_name}</h2>
            {allMovieIdsWatch.includes(movieId) ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemoveFromWatchlist(movie)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</Button>}
            {allMovieIdsRev.includes(movieId) ? <Button size="small" variant="contained" color="warning" onClick={() => setFormBool(true)}>Edit Review</Button> : <Button size="small" variant="contained" color="primary" onClick={() => setFormBool(true)}>Create Review</Button>}
            {formBool ? null : <Review review={review}/>}
            {formBool ? <ReviewForm handleFormBool={handleFormBool} review={review} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} movie={movie}/> : null}
        </DetailsDiv>
    )
}

export default ExactDetails

const DetailsDiv = styled.div`

`