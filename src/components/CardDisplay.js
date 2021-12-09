// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function CardDisplay ({movie, handleDetailClick, watchlistMovies, reviewedMovies, setDetailMovie, handleEditReview, handleCreateReview, handleRemoveFromWatchlist, handleAddToWatchlist, user, handleDirectorClick}) {

    const movieId = movie.id
    const allMovieIdsWatch = watchlistMovies.map(movie => movie.id)
    let allMovieIdsRev = reviewedMovies.map(movie => movie.id)
    const isReviewed = allMovieIdsRev.includes(movieId) ? user.reviews.find(review => review.movie_id === movie.id).star_rating : null


    return(
    <CardDiv>
        <img src="https://simg.nicepng.com/png/small/246-2469081_jake-adventure-time-and-jake-the-dog-image.png" alt="jake"/>
        <Link to="/details" onClick={() => setDetailMovie(movie)}>
            <h3>{movie.title}</h3>
        </Link>
        {isReviewed ? <h4 style={{color: 'gold'}}>{"★".repeat(isReviewed)}</h4> : <h5>*not yet reviewed*</h5>}
        <h6>Directed by:</h6>
        <DirectorH4 onClick={() => handleDirectorClick(movie.director)}>{movie.director.first_name} {movie.director.last_name}</DirectorH4>
        <h5>{movie.genre} | Rated: {movie.mpa_rating}</h5>
        {allMovieIdsWatch.includes(movieId) ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemoveFromWatchlist(movie)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</Button>}
    </CardDiv>
    )
}

export default CardDisplay

const CardDiv = styled.div`
margin: 10px 2.5% 10px 2.5%;
padding: 5px 5px 5px 5px;
width: calc(20% - 10px);
min-height: 250px;
/* border: solid;
border-width: 1px; */
border-radius: 5px;
border-color: black;
background-color: hsl(0, 0%, 98%);
transition: background-color 500ms, border-color 500ms;
box-shadow: 3px 3px 4px hsl(0, 0%, 85%);
position: relative;

button{
    margin: 5px 2px 5px 2px;
}

img{
  max-width: 180px;
  height: 100px;
  animation: rotation 2s infinite linear;
}

a{
    color: black;
    text-decoration: none;
}

a:visited{
    color: black;
}

h3:hover{
    color: #fcba03;
    cursor: pointer;
    font-style: italic;
}
`
const DirectorH4 = styled.h4`
    :hover{
        color: #754c9e;
        cursor: pointer;
        font-style: italic;
    }
`


/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            // height="140"
            image="https://simg.nicepng.com/png/small/246-2469081_jake-adventure-time-and-jake-the-dog-image.png"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {word}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card> */