import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Home } from "@mui/icons-material";

function Homepage () {

    return (
        <div>
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
        </div>
    )
}

export default Homepage

const HomepageDiv = styled.div`
    position: absolute
`

const NotificationsDiv = styled.div`

position: sticky;
top: 5px;
margin: 0px 20px 0px 10px;
float: left;
width: 200px;
background: hsl(0, 0%, 90%);
border: solid;
border-width: 1px;
border-radius: 5px; 
height: 800px;
/* overflow: none; */
/* 
h4{
  text-align: left;
  margin: 10px 0px 5px 20px;
  text-decoration: underline;
}

ul {
  list-style-type: none;
  text-align: left;
  margin: 0px;
  padding-left: 25px;
} */

`