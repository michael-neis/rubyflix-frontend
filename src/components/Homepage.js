import styled from "styled-components";
import DisplayContainer from "./DisplayContainer";
import Notifications from "./Notifications";

function Homepage () {

    return (
        <HomeDiv>
            <Notifications/>
            <DisplayContainer/>
        </HomeDiv>
    )
}

export default Homepage

const HomeDiv = styled.div`
    position: absolute;
`