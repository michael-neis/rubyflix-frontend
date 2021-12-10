import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"

function Header ({handleUserMovies}) {


    return(
        <HeaderDiv>
            <h1>
                <Link to='/'>Hallo</Link>
            </h1>
            <NavLink to="/search">Search    |</NavLink>
            <NavLink to="/watchlist">    Watchlist    |</NavLink>
            <NavLink to="/reviews">    Reviews    |</NavLink>
            <NavLink to="/favorites">    Favorites    |</NavLink>
            <NavLink to="/suggestions">    Suggested to Me    |</NavLink>
            <NavLink to="/findmovie">    Find Something New</NavLink>
        </HeaderDiv>
    )
}

export default Header

const HeaderDiv = styled.div`

    background-color: hsl(210, 50%, 20%);
    color: hsl(30, 100%, 80%);
    margin: 0px;
    position: sticky;

    a {
        color: hsl(30, 100%, 80%);
        text-decoration: none;
    }

    a:visited {
        color: hsl(30, 100%, 80%);
    }

    h1{
        margin: 0px;
        padding: 10px 0px 10px 0px;
    }

`