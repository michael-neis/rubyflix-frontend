import '../App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import Login from './Login';
// import Homepage from './Homepage';
// import styled from "styled-components";
import DisplayContainer from "./DisplayContainer";
import Notifications from "./Notifications";
import Header from './Header';
import Search from './Search';
import ExactDetails from './ExactDetails';
import FindNewMovie from './FindNewMovie';


function App() {

  const baseUrl = 'http://localhost:9292'

  const [allMovies, setAllMovies] = useState([])
  const [allDirectors, setAllDirectors] = useState([])
  const [searchableThings, setSearchableThings] = useState([])
  const [user, setUser] = useState(null)
  const [watchlistMovies, setWatchlistMovies] = useState([])
  const [reviewedMovies, setReviewedMovies] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([])
  const [favoriteDirectors, setFavoriteDirectors] = useState([])
  const [moviesToShow, setMoviesToShow] = useState([])
  const [detailMovie, setDetailMovie] = useState(null)

  const [genreToggle, setGenreToggle] = useState(null)
  const [detailedDisplay, setDetailedDisplay] = useState('')
  const [searchedWord, setSearchedWord] = useState('')

  useEffect(() => {
    fetch(`${baseUrl}/movies`)
    .then(res => res.json())
    .then(data =>{
        setAllMovies(data)
        setSearchableThings(data.map(movie => movie.title))
    })
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/directors`)
    .then(res => res.json())
    .then(data =>{
        setAllDirectors(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/users`)
    .then(res => res.json())
    .then(data =>{
        setUser(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/user/watchlist`)
    .then(res => res.json())
    .then(data =>{
        setWatchlistMovies(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/user/reviews`)
    .then(res => res.json())
    .then(data =>{
        setReviewedMovies(data)
    })
  }, [])

  const handleGenreToggle = (e) => {
      setGenreToggle(e.target.value)
      setSearchedWord(e.target.value)
  }

  const handleGenreSubmit = (e) => {
    setGenreToggle(null)
  }

  const handleSearchSubmit = (text) => {
    console.log(text)
    setSearchedWord(text)
  }

  const handleDetailClick = (word) => {
    console.log(word)
    setDetailedDisplay(word)
  }

  const handleAddToWatchlist = (movie) => {
    fetch('http://localhost:9292/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .then((string) =>{
      // console.log(string)
      alert(string.message)
      setWatchlistMovies([...watchlistMovies, movie])
    })
  }

  const handleRemoveFromWatchlist = () => {
    console.log("hello")
  }

  const handleCreateReview = () => {
    console.log("hello")
  }

  const handleEditReview = () => {
    console.log("hello")
  }

  return (
    <div className="App">
      <Header />
      <Notifications />
      <button onClick={() => console.log(user.username)}>check stuff</button>
      <Routes>
        <Route path="/" element={<h1>Hello there</h1>}/>

        <Route path="/search" element={<Search searchArray={searchableThings} handleSearchSubmit={handleSearchSubmit} genreToggle={genreToggle} handleGenreToggle={handleGenreToggle} handleGenreSubmit={handleGenreSubmit}/>}/>

        <Route path="/watchlist" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Watchlist"} handleDetailClick={handleDetailClick} moviesToShow={watchlistMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>

        <Route path="/reviews" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Reviews"} handleDetailClick={handleDetailClick} moviesToShow={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>

        <Route path="/favorites" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Favorites"} handleDetailClick={handleDetailClick} moviesToShow={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>

        <Route path="/suggestions" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={"My Suggestions"} handleDetailClick={handleDetailClick} moviesToShow={allMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>

        <Route path="/results" element={<DisplayContainer watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} setDetailMovie={setDetailMovie} displayName={`Results for "${searchedWord}"`} handleDetailClick={handleDetailClick} moviesToShow={allMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>

        <Route path="/details" element={<ExactDetails movie={detailMovie} watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>

        <Route path="/findmovie" element={<FindNewMovie watchlistMovies={watchlistMovies} reviewedMovies={reviewedMovies} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>}/>
      </Routes>
    </div>
  );
}

export default App;
