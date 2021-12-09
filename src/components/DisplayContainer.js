import CardDisplay from "./CardDisplay";
import styled from "styled-components";
import { useEffect } from "react";

function DisplayContainer ({moviesToShow, handleDetailClick, displayName, watchlistMovies, reviewedMovies, setDetailMovie, handleEditReview, handleCreateReview, handleRemoveFromWatchlist, handleAddToWatchlist}) {

    const movies = moviesToShow.map(movie => <CardDisplay key={movie.id} movie={movie} handleDetailClick={handleDetailClick} watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>)

    return(
        <>
        <h1>{displayName}</h1>
        <DisplayDiv>
            {movies}
        </DisplayDiv>
        </>
    )
}

export default DisplayContainer

const DisplayDiv = styled.div `

  margin: 0px 10px 10px 230px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  /* width: 800px; */
  background-color: hsl(0, 0%, 95%);
  border-radius: 5px;   
  border: double;
  border-width: 4px;

  div:hover {
    background-color: hsl(210, 50%, 95%);
  border-color: hsl(180, 50%, 20%);
  }

`