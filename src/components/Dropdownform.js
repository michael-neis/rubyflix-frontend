import { useState } from "react"
import styled from "styled-components"
import useDropFill from "../hooks/useDropFill"
import { Button } from "@mui/material"


function DropdownForm({array, handleSubmit}){

    const [letters, setLetters] = useState('')
    const [selector, setSelector] = useState(-1)
    const [showDrop, setShowDrop] = useState(true)

    const showWords = useDropFill(array, letters, selector, showDrop, handleHover, handleDropEvent)

    function handleDropEvent(e, showWords){
        setShowDrop(true)
        if(letters !== ''){
            if(e.key === "ArrowDown"){
                if (!showWords) return true
                e.preventDefault()
                setSelector(selector >= showWords.props.children.length - 1 ? 0 : selector + 1)
            } else if (e.key === "ArrowUp"){
                if (!showWords) return true
                e.preventDefault()
                setSelector(selector <= 0 ? showWords.props.children.length - 1 : selector - 1)
            } else if ((e.key === "Enter" || e.type === "click") && document.getElementById('selectedWordDiv')){
                e.preventDefault()
                const newTextDiv = document.getElementById('selectedWordDiv')
                setLetters(newTextDiv.innerText)
                setShowDrop(!showDrop)
                setSelector(-1)
            }
        } else {
            setSelector(-1)
        }}

        
    function handleHover(index){
        setSelector(index)
    }

    function handleType(e){
        const typedLetters = e.target.value
        setLetters(typedLetters)
    }
    
    function preventSubmit(e){
        e.preventDefault()
        if (array.includes(letters)){
            handleSubmit(letters)
            setLetters('')
        }else{
            alert(`Nothing was found for "${letters}""`)
            setLetters('')
        }
    }

    document.addEventListener('click', () =>{
        setSelector(-1)
        setShowDrop(false)
    })

    return(
        <DropForm onKeyDown={(e) => handleDropEvent(e, showWords)} onSubmit={preventSubmit}>
            <input type='text' onChange={handleType} value={letters}/>
            {showWords}
            <Button variant="contained" color="success" type='submit'>Search</Button>
        </DropForm>
    )
}

export default DropdownForm

const DropForm = styled.form`
    display: inline-block;
    position: relative;
    input {
        font-size: 25px;
    }
    button{
        position: absolute;
        margin-left: 10%;
    }
`