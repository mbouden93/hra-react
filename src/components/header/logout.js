import React from 'react';
import {Icon} from "semantic-ui-react";

class Logout extends React.Component {

    logout() {
        fetch('http://localhost:8080/hr-business-services-rest/business-services/logout', {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/*',
                'Accept-Language': 'fr-FR',
            })
        })
            .then(body => {
                document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                localStorage.clear();
                window.location.assign("/");
            });
    }

    render () {
        return <a onClick={this.logout.bind(this)}><Icon size={'big'} name="power"></Icon></a>
    }
}

export default Logout;