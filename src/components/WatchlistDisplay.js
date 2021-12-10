import CardDisplay from "./CardDisplay";
import styled from "styled-components";
import { useEffect, useState } from "react";

function WatchlistDisplay () {

    const [userMovies, setUserMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/watchlist')
        .then(res => res.json())
        .then(data =>{
            setUserMovies(data)
        })
      }, [])


  const handleRemoveFromWatchlist = (movie) => {
      fetch(`http://localhost:9292/watchlist/${movie.watchlist.id}`, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(() =>{
          const newArray = userMovies.filter(film => film.watchlist.id !== movie.watchlist.id)
          setUserMovies(newArray)
      })
  }

    const showMovies = userMovies.map(item => <CardDisplay key={item.movie.id} movie={item} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>)

    return(
        <>
        <h1 style={{color: '#e8c495'}}>My Watchlist</h1>
        <DisplayDiv>
            {showMovies}
        </DisplayDiv>
        </>
    )
}

export default WatchlistDisplay

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