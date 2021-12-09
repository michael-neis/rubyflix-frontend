import styled from "styled-components";
import { Button } from "@mui/material";

function ExactDetails ({movie, watchlistMovies, reviewedMovies, handleEditReview, handleCreateReview, handleRemoveFromWatchlist, handleAddToWatchlist}) {

    const movieId = movie.id
    const allMovieIdsWatch = watchlistMovies.map(movie => movie.id)
    const allMovieIdsRev = reviewedMovies.map(movie => movie.id)

    return(
        <DetailsDiv>
            <img src="https://simg.nicepng.com/png/small/246-2469081_jake-adventure-time-and-jake-the-dog-image.png" alt="Pimcr"/>
            <h1>{movie.title}</h1>
            <h2>Director: {movie.director.first_name} {movie.director.last_name}</h2>
            {allMovieIdsWatch.includes(movieId) ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemoveFromWatchlist(movie)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</Button>}
            {allMovieIdsRev.includes(movieId) ? <Button size="small" variant="contained" color="warning" onClick={() => handleEditReview(movie)}>Edit Review</Button> : <Button size="small" variant="contained" color="primary" onClick={() => handleCreateReview(movie)}>Create Review</Button>}
        </DetailsDiv>
    )
}

export default ExactDetails

const DetailsDiv = styled.div`

`