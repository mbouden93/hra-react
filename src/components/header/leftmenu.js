import React from 'react';
import PropTypes from 'prop-types';

const LeftMenu = (props) => (
    <div className="ui menu">
        <div className="header item">HR ACCESS</div>
        <span className="item">Bienvenue {props.fullname}</span>
        <div className="menu item">
            <div className="ui buttons">
                <button className="ui button">Collaborateur</button>
                <div className="or"></div>
                <button className="ui button">Manager</button>
                <div className="or"></div>
                <button className="ui button">Expert RH</button>
            </div>
        </div>
    </div>
);

LeftMenu.propTypes = {
    fullname: PropTypes.string.isRequired
};

export default LeftMenu;