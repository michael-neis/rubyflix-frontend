import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"

function Header () {


    return(
        <HeaderDiv >
            <h1>
                <Link to='/'>RubyFlix</Link>
            </h1>
            <NavLink to="/search">Search    |</NavLink>
            <NavLink to="/watchlist">    Watchlist    |</NavLink>
            <NavLink to="/reviews">    Reviews    |</NavLink>
            <NavLink to="/suggestions">    Suggested to Me    |</NavLink>
            <NavLink to="/findmovie">    Find Something New</NavLink>
        </HeaderDiv>
    )
}

export default Header

const HeaderDiv = styled.div`

    background-color: #632626;
    margin-bottom: 3px;
    padding-bottom: 20px;
    border-bottom: outset;
    border-right: outset;
    border-color: #632626;

    a {
        color: #e8c495;
        text-decoration: none;
    }

    a:hover{
        color: #e8c495;
    }

    a:visited {
        color: #e8c495;
    }

    h1{
        margin: 0px;
        padding: 10px 0px 10px 0px;
        color: #e8c495;
    }

`