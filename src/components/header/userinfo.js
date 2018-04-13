import React from 'react';

const sessionManager = require('../../sessionmanager');

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fullname : ""};
    }

    componentDidMount() {
        let employee = sessionManager.getEmployeeRole();
        let population = localStorage.getItem("population");
        fetch('http://localhost:8080/hr-business-services-rest/business-services/gp/ASW018E0?role='+employee+'&startpop='+population
            , {
                method: 'GET',
                credentials: 'include',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Accept-Language': 'fr-FR',
                })
            }
        )
            .then(response => response.json()).then(item =>
                this.setState({fullname: sessionManager.getUserName(item)})
        ).catch(onerror => console.log(onerror));
    }

    render() {
        return (
            <span>Bienvenue {this.state.fullname}</span>
        );
    }

}

export default UserInfo;