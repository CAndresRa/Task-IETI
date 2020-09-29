import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './Users.css';
import {NavBar} from './NavBar';
import axios from 'axios';

export class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : [{}],
        }
        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers(){
        let usersBackend = axios.get('https://pure-reef-37959.herokuapp.com/user/getusers')
        .then( usersBackend => {
            this.setState({users:usersBackend.data});
            console.log(this.state.users);
        })

    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="root">
                    <h1>Usuarios del sistema</h1>
                    <List>
                        {this.state.users.map((user) => {
                            
                            return(
                                <ListItem>
                                    <ListItemText >
                                        {user.name} - {user.email}
                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>

            </div>

        );
    }
}