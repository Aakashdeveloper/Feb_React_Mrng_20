import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'

import Profile from './Profile';
import RgisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import UserList from './UserList'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RgisterComponent}></Route>
                <Route exact path="/login" component={LoginComponent}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/list" component={UserList}></Route>
            </BrowserRouter>
        </div>
    )
}


export default Routing;