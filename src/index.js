import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import LoginForm from "./components/loginform";
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/home" component={App} />
            <Route path="/" component={LoginForm} />
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
