import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "semantic-ui-react";

class SingleTask extends React.Component {
    render() {
        return (<Card>
            <Card.Content>
                <Card.Header>
                    {this.props.label}
                </Card.Header>
                <Card.Meta>
                    {this.props.startDate} - {this.props.endDate}
                </Card.Meta>
                <Card.Description>
                    <strong>{this.props.subject}</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Decline</Button>
                </div>
            </Card.Content>
        </Card>);
    }
}

SingleTask.propTypes = {
    label: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string
};

export default SingleTask;