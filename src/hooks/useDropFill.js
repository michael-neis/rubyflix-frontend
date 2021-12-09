import styled from "styled-components"

function useDropFill(array, input, selector, showDrop, handleHover, handleDropEvent){

    if (!showDrop) return false;

    const matchWords = array.filter(word => word.substr(0, input.length).toLowerCase().includes(input.toLowerCase()))

    if(input === ''){
        const wordDivs = null
        return wordDivs
    }else if(selector >= 0){
        const wordDivs = matchWords.map(word => matchWords.indexOf(word) === selector ? <SelectedDiv onClick={(e) => handleDropEvent(e)} key={word} id="selectedWordDiv"><strong>{word.substr(0, input.length)}</strong>{word.substr(input.length)}</SelectedDiv> : <DropDiv onClick={(e) => handleDropEvent(e)} onMouseEnter={() => handleHover(matchWords.indexOf(word))} key={word}><strong>{word.substr(0, input.length)}</strong>{word.substr(input.length)}</DropDiv>)

        const allDivs = <ContainDiv>{wordDivs}</ContainDiv>

        return(allDivs) 
    }else{
        const wordDivs = matchWords.map(word => <DropDiv onClick={(e) => handleDropEvent(e)} onMouseEnter={() => handleHover(matchWords.indexOf(word))} key={word}><strong>{word.substr(0, input.length)}</strong>{word.substr(input.length)}</DropDiv>)

        const allDivs = <ContainDiv>{wordDivs}</ContainDiv>
        
        return(allDivs)   
    }
}

export default useDropFill

const DropDiv = styled.div`
    border: 1px solid;
    text-align: left;
    background-color: white;
    cursor: pointer;
    z-index: 99999;
`
const SelectedDiv = styled.div`
    border: 1px solid;
    text-align: center;
    color: white;
    background-color: #247320;
    font-size: 130%;
    cursor: pointer;
    border-color: black;
    z-index: 99999;
`

const ContainDiv = styled.div`
    position: absolute;
    width: 100%;
`