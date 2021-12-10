import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Notifications () {

    return(
        <NotificationsDiv>
            <h1>Notifications</h1>
            <List>
                <ListItem>Nothing to see here</ListItem>
            </List>
        </NotificationsDiv>
    )
}

export default Notifications

const NotificationsDiv = styled.div`
    position: sticky;
    top: 2.5vh;
    margin: 0px 20px 0px 10px;
    float: left;
    width: 200px;
    background: #785a55;
    border: outset;
    border-width: 3px;
    border-color: #785a55;
    height: 95vh;
`