import { Button } from "@mui/material"
import { useState } from "react"
import ExactDetails from "./ExactDetails"

function FindNewMovie ({watchlistMovies, reviewedMovies, handleEditReview, handleCreateReview, handleRemoveFromWatchlist, handleAddToWatchlist, user}) {

    const [newMovie, setNewMovie] = useState(null)

    const queryNewMovie = () =>{
        fetch('http://localhost:9292/user/find_new_movie')
        .then(res => res.json())
        .then(data =>{
            setNewMovie(data)
        })
    }

    let newMovieToShow

    if (newMovie === "no reviews")
        newMovieToShow = <h1>Please review some movies so we can give you a suggestion!</h1>
    else if (newMovie === "not enough reviews")
        newMovieToShow = <h1>We couldn't find you a match. Try adding more reviews so we can narrow down a suggestion!</h1>
    else
        newMovieToShow = <ExactDetails movie={newMovie} watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user}/>

    return(
        <>
        <Button variant="contained" onClick={() => queryNewMovie()}>Find Me a New Movie!</Button>
        {newMovie ? newMovieToShow : <h1>nothin</h1>}
        </>
    )
}

export default FindNewMovie