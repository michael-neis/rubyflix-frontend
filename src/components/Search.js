import DropdownForm from "./Dropdownform"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Search () {

    const [genreToggle, setGenreToggle] = useState(null)
    const [movieArray, setMovieArray] = useState([])
    const [searchId, setSearchId] = useState(null)

    useEffect(() => {
        fetch('http://localhost:9292/movie_titles')
        .then(res => res.json())
        .then(data =>{
            setMovieArray(data)
        })
    }, [])

    const handleGenreToggle = (e) => {
        setGenreToggle(e.target.value)
    }

    const handleSearchSubmit = (title) =>{
        fetch(`http://localhost:9292/search_movie/${title}`)
        .then(r => r.json())
        .then(id => {
            setSearchId(id)
        })
    }

    if (searchId){
        return <Navigate to={`/movies/${searchId}`}/>
    }

    return(
        <SearchDiv>
            <h3>Find Movie by Genre:</h3>
            <div>
            <ToggleButtonGroup color="success" value={genreToggle} exclusive onChange={(e) => handleGenreToggle(e)}>
                <ToggleButton value="Action">Action</ToggleButton>
                <ToggleButton value="Sci-Fi">Sci-Fi</ToggleButton>
                <ToggleButton value="Thriller">Thriller</ToggleButton>
                <ToggleButton value="Adventure">Adventure</ToggleButton>
                <ToggleButton value="Family">Family</ToggleButton>
                <ToggleButton value="Drama">Drama</ToggleButton>
                <ToggleButton value="Crime">Crime</ToggleButton>
            </ToggleButtonGroup>
            </div>
            <div>
            <br/>
            {genreToggle ? <Link to={`/genres/${genreToggle}`}><Button variant="contained" color="success">Go</Button></Link> : <Button variant="contained" color="success" disabled>Go</Button>}
            </div>
            <h3>Search by Movie:</h3>
            <DropdownForm array={movieArray} handleSubmit={handleSearchSubmit}/>
        </SearchDiv>
    )
}

export default Search

const SearchDiv = styled.div`
    a{
        text-decoration: none;
    }

margin: 200px 10px 10px 230px;
background: white;
padding: 1px 0px 10px 0px;
`