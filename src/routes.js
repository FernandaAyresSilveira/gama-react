import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Repositories from './Repositories';
import Home from '/Home';

export default Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path ='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
        
    )
}