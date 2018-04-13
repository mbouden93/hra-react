import React from 'react';
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import MainContent from "../main-content/maincontent";

const history = createBrowserHistory();

export default class SideMenu extends React.Component {
    state = { visible: true };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    render() {
        const { visible } = this.state;

        return (
            <div>
            <Router history={history}>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical>
                        <Menu.Item name='home'>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Link to="/error" >Hello</Link>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <MainContent/>
                        </Segment>
                    </Sidebar.Pusher>
                    <Route path="/" />
                    <Route path="/error" />
                </Sidebar.Pushable>
            </Router>
            </div>
        )
    }
}
