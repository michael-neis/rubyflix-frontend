import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExactDetails from "./ExactDetails";

function DetailsContainer ({user}) {

    const pathId = useParams()

    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([])
    const [formBool, setFormBool] = useState(false)
    
    useEffect(() => {
        fetch('http://localhost:9292/reviews')
        .then(r => r.json())
        .then(data => {
            setReviews(data)
        })
    }, [])

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

    const handleFormBool = () => {
        setFormBool(!formBool)
    }

    const handleCreateReview = (data, movie) => {
        fetch('http://localhost:9292/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            star_rating: data.star_rating,
            comment: data.comment,
            id: movie.id
          })
        })
        .then(res => res.json())
        .then((data) =>{
          setReviews(data)
        })
      }
    
      const handleEditReview = (data, review, movie) => {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            star_rating: data.star_rating,
            comment: data.comment,
          }),
        })
          .then((r) => r.json())
          .then((data) =>{
            setReviews(data)
        })
    }

    const showMovie = movie.map(movie => <ExactDetails key={movie.title} movie={movie} formBool={formBool} user={user} handleRemove={handleRemove} handleAdd={handleAdd} reviews={reviews} handleFormBool={handleFormBool} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview}/>)


    return(
        <>
            {showMovie}
        </>
    )
}

export default DetailsContainer