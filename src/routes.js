import React from 'react';
import LoginForm from "./components/loginform";
import App from './App';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

class Routes extends React.Component {
    render(){
        return(
                <Router history={browserHistory}>
                    <Switch>
                        <Route path="/home" component={App}/>
                        <Route path="/" component={LoginForm}/>
                    </Switch>
                </Router>
        )
    }
}

export default Routes;