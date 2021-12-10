import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";
import ExactDetails from "./ExactDetails";

function DetailsContainer ({user}) {

    const pathId = useParams()

    const [movie, setMovie] = useState([])
    const [formBool, setFormBool] = useState(false)
    
    useEffect(() => {
        fetch(`http://localhost:9292/movies/${pathId.id}`)
        .then(r => r.json())
        .then(data => {
            setMovie([data])
        })
    }, [])

    const handleRemove = (watchId) => {
        fetch(`http://localhost:9292/watchlist/details/${watchId.id}`, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then((data) =>{
          setMovie([data])
      })
    }

    const handleAdd = (movie) =>
        fetch('http://localhost:9292/watchlist/details', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            })
        .then(res => res.json())
        .then((data) =>{
            setMovie([data])
    })

    const showMovie = movie.map(movie => <ExactDetails key={movie.title} movie={movie} formBool={formBool} user={user} handleRemove={handleRemove} handleAdd={handleAdd}/>)


    return(
        <>
            {showMovie}
        </>
    )
}

export default DetailsContainer