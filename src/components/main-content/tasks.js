import React from 'react';
import SingleTask from "./singletask";
import {Card, List, Transition} from "semantic-ui-react";

const sessionManager = require('../../sessionmanager');

class Tasks extends React.Component{
    constructor(props) {
        super(props);
        this.state= {tasks: []};
    }

    componentDidMount() {
        fetch('http://localhost:8080/hr-business-services-rest/business-services/tasks?role='+sessionManager.getEmployeeRole(),{
                method: 'GET',
                credentials: 'include',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Accept-Language': 'fr-FR',
                })
            }
        )
            .then(response => response.json())
            .then(body => {
                if (body.status === 'OK') {
                    let items = body.task;
                    let liste = [];
                    if (items)
                        items.map(item =>
                            liste.push(<SingleTask key={item["@id"]} label={item["@label"]} subject={item["@subject"]}
                                                   startDate={item["@startDate"]} endDate={item["@endDate"]}/>)
                        );
                    this.setState({tasks: liste});
                }
                return true;
            })
            .catch();
    }

    render() {
        return (
            <Card.Group>
                {this.state &&
                <Transition.Group as={List} duration={1200} divided >
                    {this.state.tasks.map(task => <List.Item>
                        <List.Content header = {task}/>
                    </List.Item>)}
                </Transition.Group>}
            </Card.Group>
        );
    }
}

export default Tasks;