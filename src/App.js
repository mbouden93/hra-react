import React, { Component } from 'react';
import Header from './components/header/header'
import SideMenu from "./components/sidemenu/sidemenu";

const sessionManager = require('./sessionmanager');

class App extends Component {
    constructor(props) {
        super(props);
        if(!sessionManager.readCookie("sessionId")) {
            window.location.assign("/");
        }
    }

  render() {
    return (
      <div>
        <Header fullname="Mahmoud Bouden" />
        <SideMenu/>
      </div>
    );
  }
}

export default App;
