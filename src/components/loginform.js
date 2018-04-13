import React from 'react';
import {Button, Form, Grid, Header, Image, Message} from "semantic-ui-react";
import logo from '../logo.jpg';

const sessionManager = require('../sessionmanager');

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', loading: false, message: false};

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin(event) {
        event.preventDefault();
        this.setState({loading: true});

        let data = {
            username : this.state.username,
            password: this.state.password,
            language: 'F'
        };

        fetch('http://localhost:8080/hr-business-services-rest/business-services/login', {
            body: JSON.stringify(data), // must match 'Content-Type' header
            method: 'POST',
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Accept-Language': 'fr-FR',
            })
        })
            .then(response => response.json())
            .then(body => {
                this.setState({loading: false});
                if( body.status === 'OK') {
                    let x = sessionManager.e4();
                    sessionManager.writeCookie("sessionId", x, 30);
                    let roles = [];
                    let population = "";
                    body.roles.role.map( role => {
                        roles.push(role["@name"]);
                        if (role["@name"].includes("EMPLOYEE")) {
                            population = role["@dossierID"];
                        }
                        return true;
                    });
                    localStorage.setItem("roles", roles);
                    localStorage.setItem("population", population);
                    this.setState({message: false});
                    this.props.history.push("/home");
                } else {
                    this.setState({message: true});
                }
            })
            .catch(error => {
            this.setState({loading: false, message: true});
        });
    }

    changeUsername(event) {
        event.preventDefault();
        this.setState({username: event.target.value});
    }

    changePassword(event) {
        event.preventDefault();
        this.setState({password: event.target.value});
    }

    render() {
        const {username, password, loading} = this.state;
        return (
            <div className='login-form'>
                <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                  }
                `}</style>
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
                stackable
            >
                <Grid.Column  style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image  style={{width: 150, height: 150}} src={logo}/>
                    </Header>
                        <Form loading={loading} onSubmit={this.submitLogin}>
                            <Form.Field >
                                <input type="text" onChange={this.changeUsername} value={username} placeholder='Identifiant' />
                            </Form.Field>
                            <Form.Field>
                                <input type="password" onChange={this.changePassword} value={password} placeholder='Mot de passe' />
                            </Form.Field>
                            {this.state.message &&
                                <Message negative >
                                    <Message.Header>Identifiant / Mot de passe incorrect.</Message.Header>
                                </Message>
                            }
                            <Button fluid color="red" type='submit'>Submit</Button>
                        </Form>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default LoginForm;