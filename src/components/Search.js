import DropdownForm from "./Dropdownform"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Search ({searchArray, handleSearchSubmit, genreToggle, handleGenreToggle, handleGenreSubmit}) {

    return(
        <SearchDiv>
            <h3>Find Movie by Genre:</h3>
            <div>
            <ToggleButtonGroup color="primary" value={genreToggle} exclusive onChange={(e) => handleGenreToggle(e)}>
                <ToggleButton color="success" value="Action">Action</ToggleButton>
                <ToggleButton color="success" value="Sci-Fi">Sci-Fi</ToggleButton>
                <ToggleButton color="success" value="Horror">Horror</ToggleButton>
                <ToggleButton color="success" value="Adventure">Adventure</ToggleButton>
                <ToggleButton color="success" value="Romance">Romance</ToggleButton>
                <ToggleButton color="success" value="Drama">Drama</ToggleButton>
            </ToggleButtonGroup>
            </div>
            <div>
            {genreToggle ? <Link to="/results" onClick={handleGenreSubmit}><Button variant="contained" color="success">Go</Button></Link> : <Button variant="contained" color="success" disabled>Go</Button>}
            </div>
            <h3>Search by Movie/Director:</h3>
            <DropdownForm array={searchArray} handleSubmit={handleSearchSubmit}/>
        </SearchDiv>
    )
}

export default Search

const SearchDiv = styled.div`
    a{
        text-decoration: none;
    }
`