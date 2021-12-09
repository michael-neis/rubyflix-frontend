import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import { Home } from "@mui/icons-material";

function Notifications () {

    return(
        <NotificationsDiv>
            <h1>Notifications</h1>
            <List>
                <ListItem>Hello World</ListItem>
                <ListItem>Hello World</ListItem>
                <ListItem>Hello World</ListItem>
                <ListItem>Hello World</ListItem>
                <ListItem>Hello World</ListItem>
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
    background: hsl(0, 0%, 90%);
    border: solid;
    border-width: 1px;
    border-radius: 5px; 
    height: 95vh;
`