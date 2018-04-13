import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "semantic-ui-react";

class MonthDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {days: props.days}
    }

    render() {
        var liste=[];
        var i=0;
        for (i=1; i<=this.state.days; i++) {
            let item = <Table.HeaderCell> {i} </Table.HeaderCell>;
            liste.push(item);
        }
        return liste;
    }
}

MonthDays.propTypes = {
    days: PropTypes.number.isRequired
};

export default MonthDays;