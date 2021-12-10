import CardDisplay from "./CardDisplay";
import styled from "styled-components";
import { useEffect, useState } from "react";

function ReviewsDisplay () {

    const [userMovies, setUserMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/reviews')
        .then(res => res.json())
        .then(data =>{
            setUserMovies(data)
        })
      }, [])


    const handleAddToWatchlist = (movie) => {
        fetch('http://localhost:9292/watchlist', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie.movie)
        })
        .then(res => res.json())
        .then((data) =>{
            const newMovie = userMovies.map(movie => movie.movie.id === data.watchlist.movie_id ? {movie: movie.movie, review: movie.review, director: movie.director, watchlist: data.watchlist} : movie)
            setUserMovies(newMovie)
        })
    }

    const handleRemoveFromWatchlist = (movie) => {
        fetch(`http://localhost:9292/watchlist/${movie.watchlist.id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) =>{
            const newMovie = userMovies.map(movie => movie.movie.id === data.watchlist.movie_id ? {movie: movie.movie, review: movie.review, director: movie.director, wathclist: null} : movie)
            setUserMovies(newMovie)
        })
    }
    
    const showMovies = userMovies.map(item => <CardDisplay key={item.movie.id} movie={item} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>)

    return(
        <>
        <h1 style={{color: '#e8c495'}}>My Reviews</h1>
        <DisplayDiv>
            {showMovies}
        </DisplayDiv>
        </>
    )
}

export default ReviewsDisplay

const DisplayDiv = styled.div `

  margin: 0px 10px 10px 230px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #632626;
  border: outset;
  border-width: 4px;
  border-color: #632626;

`