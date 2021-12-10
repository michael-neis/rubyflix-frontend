import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

function DirectorDisplay () {

    const directorId = useParams()

    const [director, setDirector] = useState({
        first_name: '',
        last_name: '',
        movies: [],
        oscars: 0
    })

    useEffect(() => {
        fetch(`http://localhost:9292/directors/${directorId.id}`)
        .then(r => r.json())
        .then(data => {
            setDirector(data)
        })
    }, [])

    let movies

    if (director.movies.length > 0){
        movies = director.movies.map(m => <Link to={`/movies/${m.id}`}><h3>{m.title}</h3></Link>)
    } else {
        movies = <li>No Movies to Show</li>
    }

    return(
        <DirectorDiv>
        <h1>{director.first_name} {director.last_name}</h1>
        <h2>Oscars: {director.oscars}</h2>
        <h1>Movies:</h1>
        {movies}
        </DirectorDiv>
    )
}

export default DirectorDisplay

const DirectorDiv = styled.div`

color: #e8c495;
background-color: #632626;
margin: 20px 200px 0px 400px;
padding: 3px 0px 3px 0px;
border-bottom: outset;
border-right: outset;
border-color: #632626;

a{
    color: #e8c495;
    text-decoration: none;
}

a:visited{
    color: #e8c495;
}

a:hover{
    color: black;
}

img{
    width: 40%;
}
`