import React from 'react'
import {Container, Grid, Input} from 'semantic-ui-react'
import CustomTimeLine from "../CustomTimeLine";
import Tasks from "./tasks";

export default class MainContent extends React.Component {

    render() {
        return (
            <Container fluid>
                <Grid stackable>
                        <Grid.Column style={{background: "#666"}} width={11}>
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
                    <Grid.Column style={{background: "#999"}} width={3}>
                        <Tasks/>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}