import React from 'react'
import {Container, Grid, Input, Header, Segment} from 'semantic-ui-react'
import CustomTimeLine from "../CustomTimeLine";
import Tasks from "./tasks";

export default class MainContent extends React.Component {

    render() {
        return (
            <Container fluid style={{paddingLeft:'20px'}}>
                <Grid stackable>
                        <Grid.Column width={11}>
                        <Grid stackable={true}>
                            <Grid.Column width={9}>
                                <Input fluid/>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Input fluid/>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Input fluid/>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Input fluid/>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Input fluid/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Input fluid/>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <CustomTimeLine />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={4} style={{'overflowY': 'scroll', height : '529px'}}>
                        <Header as='h2' attached='top' textAlign='center'>
                            Mes Tâches
                        </Header>
                        <Segment attached>
                            <Tasks/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}