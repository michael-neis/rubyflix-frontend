import Button from '@mui/material/Button';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function CardDisplay ({movie, handleAddToWatchlist, handleRemoveFromWatchlist}) {

    return(
    <CardDiv>
        <img src={movie.movie.movie_img} alt={movie.movie.title}/>
        <Link to={`/movies/${movie.movie.id}`}>
            <h3>{movie.movie.title}</h3>
        </Link>
        {movie.review ? <h4 style={{color: 'gold'}}>{"★".repeat(movie.review.star_rating)}</h4> : <h5>*not yet reviewed*</h5>}
        <h6>Directed by:</h6>
        <Link to={`/directors/${movie.director.id}`}>
        <DirectorH4 onClick={() => console.log("director")}>{movie.director.first_name} {movie.director.last_name}</DirectorH4>
        </Link>
        <h5>{movie.movie.genre} | Rated {movie.movie.mpa_rating}</h5>
        {movie.watchlist ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemoveFromWatchlist(movie)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</Button>}
    </CardDiv>
    )
}

export default CardDisplay

const CardDiv = styled.div`
margin: 10px 2.5% 10px 2.5%;
padding: 5px 5px 5px 5px;
width: calc(20% - 10px);
min-height: 250px;
border-color: black;
background-color: hsl(0, 0%, 98%);
box-shadow: 3px 3px 4px black;
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