import React from 'react'
import 'mdbreact/dist/css/mdb.css'
import "bootstrap-css-only/css/bootstrap.min.css"; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* COMPONENTS */
import HomePage from './pages/HomePage'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    )
}

export default Routes