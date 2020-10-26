import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SetPassword from './components/SetPassword/SetPassword';


const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/reset-password" exact component={ResetPassword} />
                <Route path="/new-password" exact component={SetPassword} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
