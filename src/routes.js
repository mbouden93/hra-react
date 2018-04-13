import React from 'react';
import LoginForm from "./components/loginform";
import App from './App';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

class Routes extends React.Component {
    render(){
        return(
                <Router history={browserHistory}>
                    <div>
                        <Route path="/home" component={App}/>
                        <Route path="/" component={LoginForm}/>
                    </div>
                </Router>
        )
    }
}

export default Routes;