import styled from "styled-components";
import { Button } from "@mui/material";
import Review from "./Review";
import ReviewForm from "./ReviewForm";


function ExactDetails ({movie, formBool, user, handleRemove, handleAdd, reviews, handleFormBool, handleEditReview, handleCreateReview}) {
    
    const watchId = movie.watchlists.find(w => w.user_id === user.id)
    const revId = reviews.find(r => r.movie.id === movie.id)

    return(
        <DetailsDiv>
            <img src={movie.movie_img} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <h2>Director: {movie.director.first_name} {movie.director.last_name}</h2>
            <h3>{movie.genre}  |  {movie.mpa_rating}</h3>
            {watchId ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemove(watchId)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAdd(movie)}>Add to Watchlist</Button>}
            {revId ? <Button size="small" variant="contained" color="warning" onClick={() => handleFormBool()}>Edit Review</Button> : <Button size="small" variant="contained" color="primary" onClick={() => handleFormBool()}>Create Review</Button>}
            {formBool ? null : <Review review={revId}/>}
            {formBool ? <ReviewForm handleFormBool={handleFormBool} review={revId} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} movie={movie}/> : null}
        </DetailsDiv>
    )
}

export default ExactDetails

const DetailsDiv = styled.div`

`