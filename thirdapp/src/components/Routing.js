import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import ArtistDetails from './ArtistDetails';
import FormsComponent from './FormsComponent';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/artist/:id" component={ArtistDetails}></Route>
                <Route exact path="/forms" component={FormsComponent}></Route>
            </BrowserRouter>
        </div>
    )
}


export default Routing;