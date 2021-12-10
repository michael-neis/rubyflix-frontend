import '../App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Login from './Login';
// import Homepage from './Homepage';
// import styled from "styled-components";
import Notifications from "./Notifications";
import Header from './Header';
import Search from './Search';
import FindNewMovie from './FindNewMovie';
import WatchlistDisplay from './WatchlistDisplay';
import ReviewsDisplay from './ReviewsDisplay';
import DetailsContainer from './DetailsContainer';


function App() {

  const baseUrl = 'http://localhost:9292'

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`${baseUrl}/users`)
    .then(res => res.json())
    .then(data =>{
        setUser(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Notifications />
      <Routes>
        <Route path="/" element={<h1>Hello there</h1>}/>

        <Route path="/search" element={<Search />}/>

        <Route path="/watchlist" element={<WatchlistDisplay />}/>
        <Route path="/reviews" element={<ReviewsDisplay />}/>

        <Route path="/movies/:id" element={<DetailsContainer user={user}/>}/>

        <Route path='/findmovie' element={<FindNewMovie user={user}/>}/>

        {/* <Route path="/watchlist" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Watchlist"} handleDetailClick={handleDetailClick} moviesToShow={watchlistMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user} handleDirectorClick={handleDirectorClick}/>}/> */}

        {/* <Route path="/reviews" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Reviews"} handleDetailClick={handleDetailClick} moviesToShow={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user} handleDirectorClick={handleDirectorClick}/>}/>

        <Route path="/favorites" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Favorites"} handleDetailClick={handleDetailClick} moviesToShow={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user} handleDirectorClick={handleDirectorClick}/>}/>

        <Route path="/suggestions" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Suggestions"} handleDetailClick={handleDetailClick} moviesToShow={allMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user} handleDirectorClick={handleDirectorClick}/>}/>

        <Route path="/results" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={`Results for "${searchedWord}"`} handleDetailClick={handleDetailClick} moviesToShow={allMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user} handleDirectorClick={handleDirectorClick}/>}/>

        <Route path="/details" element={<ExactDetails movie={detailMovie} watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user}/>}/>

        <Route path="/findmovie" element={<FindNewMovie watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist} user={user}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
