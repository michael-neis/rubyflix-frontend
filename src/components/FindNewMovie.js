import { Button } from "@mui/material"
import { useState } from "react"

function FindNewMovie () {

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
    else if (!newMovie)
        newMovieToShow = null
    else
        newMovieToShow = <div><img src="https://simg.nicepng.com/png/small/246-2469081_jake-adventure-time-and-jake-the-dog-image.png" alt="jake"/><h1>{newMovie.title}</h1>
        <h2>Director: {newMovie.director.first_name} {newMovie.director.last_name}</h2>
        <h3>{newMovie.genre}  |  {newMovie.mpa_rating}</h3></div>

    return(
        <>
        <Button variant="contained" onClick={() => queryNewMovie()}>Find Me a New Movie!</Button>
        {newMovie ? newMovieToShow : <h1>nothin</h1>}
        </>
    )
}

export default FindNewMovie