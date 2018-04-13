import React from 'react'
import {Table} from "semantic-ui-react";
import MonthDays from './monthdays';

const months = [
    {nom: "January", days: 31},
    {nom: "Febraury", days: 28}
    ];

const Tableau = (props) => (
    <Table celled structured>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell rowSpan="2"> Personne </Table.HeaderCell>
                <Table.HeaderCell colSpan={months[0].days} textAlign="center"> {months[0].nom} </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <MonthDays days={months[0].days} />
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>Hello</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default Tableau;