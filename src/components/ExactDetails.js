import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";

function ExactDetails ({movie, formBool, user, handleRemove, handleAdd}) {

    // console.log(movie.watchlists)
    // console.log(user.id)
    // console.log(movie.id)

    const watchId = movie.watchlists.find(w => w.user_id === user.id)
    // const watchId = watchBool ? movie.watchlists.find(w => w.user_)
    // console.log(watchId)
    // const pathId = useParams()

    // const [movie, setMovie] = useState('')
    // const [formBool, setFormBool] = useState(false)
    
    // useEffect(() => {
    //     fetch(`http://localhost:9292/movies/${pathId.id}`)
    //     .then(r => r.json())
    //     .then(data => {
    //        setMovie(data)
    //     })
    // }, [])

    // if (!movie)
    // window.location.href = "http://localhost:3000";

    // let [formBool, setFormBool] = useState(false)

    // let movieId = movie.id
    // let allMovieIdsWatch = watchlistMovies.map(movie => movie.id)
    // let allMovieIdsRev = reviewedMovies.map(movie => movie.id)

    // let review = allMovieIdsRev.includes(movieId) ? user.reviews.find(review => review.movie_id === movie.id) : null

    // const handleFormBool = () => {
    //     setFormBool(false)
    // }

    return(
        <DetailsDiv>
            <img src="https://simg.nicepng.com/png/small/246-2469081_jake-adventure-time-and-jake-the-dog-image.png" alt="Pimcr"/>
            <h1>{movie.title}</h1>
            <h2>Director: {movie.director.first_name} {movie.director.last_name}</h2>
            {watchId ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemove(watchId)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAdd(movie)}>Add to Watchlist</Button>}
            <Button size="small" variant="contained" color="warning" onClick={() => console.log(true)}>Edit Review</Button>
            <Button size="small" variant="contained" color="primary" onClick={() => console.log(true)}>Create Review</Button>
            {/* {formBool ? null : <Review review={movie}/>}
            {formBool ? <h3>Huulu</h3> : null} */}
            {/* {formBool ? <ReviewForm handleFormBool={handleFormBool} review={movie} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} movie={movie}/> : null} */}
        </DetailsDiv>
    )
}

export default ExactDetails

const DetailsDiv = styled.div`

`