import React from 'react';
import { BrowserRouter, Route} from'react-router-dom'

import Home from '../container/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
        </BrowserRouter>
    )
}

export default Routing;