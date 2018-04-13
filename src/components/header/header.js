import React from 'react';
import {Menu} from "semantic-ui-react";
import UserInfo from "./userinfo";
import Logout from "./logout";

const Header = (props) => (
        <Menu fluid stackable>
            <Menu.Item header>
                <div>HR ACCESS</div>
            </Menu.Item>
            <Menu.Item>
                    <UserInfo/>
            </Menu.Item>
            <Menu.Item>
                    <div className="ui buttons">
                        <button className="ui button">Collaborateur</button>
                        <div className="or"></div>
                        <button className="ui button">Manager</button>
                        <div className="or"></div>
                        <button className="ui button">Expert RH</button>
                    </div>
            </Menu.Item>

            <Menu.Item position='right'>
                <div >
                    <i className="big orange question circle outline icon"></i>
                    <i className="big bell outline icon"></i>
                    <i className="big user circle outline icon"></i>
                    <Logout/>
                </div>
            </Menu.Item>
        </Menu>
);

export default Header;