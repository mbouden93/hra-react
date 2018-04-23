import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "semantic-ui-react";

class SingleTask extends React.Component {

    constructor() {
        super();
        this.state = {visible : false};
    }

    render() {
        return (

            <Card style={{height:'180px', marginTop:'10px', marginBottom:'10px', paddingRight:'20px'}} color={'yellow'} onMouseEnter={()=>(this.setState({visible:true}))}
                      onMouseLeave={()=>(this.setState({visible:false}))}>
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
            {this.state.visible && <Card.Content extra >
                <Button.Group size={'tiny'} style={{visible:this.state.visible}}>
                    <Button basic size={'tiny'} color='green'>Accepter</Button>
                    <Button basic size={'small'} color='red'>Refuser</Button>
                </Button.Group>
            </Card.Content>}
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