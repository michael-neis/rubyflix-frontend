import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function ReviewForm ({review, handleFormBool, handleEditReview, handleCreateReview, movie}) {

    const defaultText = review ? review.comment : ""
    const starDefault = review ? review.star_rating : 10

    const [formData, setFormData] = useState({
        star_rating: starDefault,
        comment: defaultText
    })


    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        if(name === "customized-10"){
            const numValue = parseFloat(value)
            setFormData({
                ...formData,
                star_rating: numValue
            })
        } else{
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }
    
    const handleSubmit = (e, data, review, movie) => {
        e.preventDefault()
        review ? handleEditReview(data, review) : handleCreateReview(data, movie.id)
        handleFormBool()
    }

    return(
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidateautoComplete="off" onChange={handleChange} onSubmit={(e) => handleSubmit(e, formData, review, movie)}>
            <Typography component="legend">My Rating:</Typography>
            <Rating name="customized-10" defaultValue={starDefault} max={10} />
            <br/>
            <TextField name="comment" id="outlined-multiline-static" label="Review" multiline rows={4} defaultValue={defaultText}/>
            <br/>
            <Button variant="contained" color="success" type="submit">Submit</Button>
        </Box>
    )
}

export default ReviewForm