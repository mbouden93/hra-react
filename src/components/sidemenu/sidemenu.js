import React from 'react';
import {Sidebar, Segment, Menu, Accordion, Icon} from 'semantic-ui-react'
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import MainContent from "../main-content/maincontent";

const history = createBrowserHistory();

export default class SideMenu extends React.Component {
    state = { visible: true, activeIndex: 0  };

    handleClickAccordion = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    render() {
        const { visible, activeIndex } = this.state;

        return (
            <div>
            <Router history={history}>
                <Sidebar.Pushable as={Segment} >
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled'
                             vertical style={{'overflowY': 'scroll', height : '529px', width:'165px'}}>
                        <Menu.Item>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Accordion fluid>
                                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClickAccordion}>
                                    <Icon name='dropdown' />
                                    First Link
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 0}>
                                    <Link to="/" >Hello</Link>
                                </Accordion.Content>

                                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClickAccordion}>
                                    <Icon name='dropdown' />
                                    Second Link
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1}>

                                    <Link to="/error" >Error</Link>
                                </Accordion.Content>
                            </Accordion>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment>
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
