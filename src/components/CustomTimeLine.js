import React, { Component } from "react";
import moment from "moment";

import Timeline from "react-calendar-timeline/lib";

const parseString = require('xml2js').parseString;
const sessionManager = require('../sessionmanager');

export default class CustomTimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {hello : []};
        var liste = [];
        fetch('http://localhost:8080/hr-business-services-rest/business-services/myTeam?role='
                    +sessionManager.getEmployeeRole()+'&dossierID='+localStorage.getItem("dossierId"),
            {
                method: 'GET',
                credentials: 'include',
                headers: new Headers({
                    'Accept': 'application/*',
                    'Accept-Language': 'fr-FR',
                })
            }
            ).then(response => response.text()).then( xml => {parseString(xml, function (err, result) {
                console.log(result);
                let res = result.teamResponse;
                if (res.status[0] === 'OK') {
                    console.log(res);
                    res.members[0].member.map(item => {
                        let x = {id : item["$"].dossierID, title : item["$"].name};
                        liste.push(x);
                        return liste;
                    });
                    console.log(liste);
                    return liste;
                }
                return liste;
                });
                this.setState({hello : liste});
                console.log(this.state.hello);
            }
        );

        const defaultTimeStart = moment()
            .startOf("month")
            .toDate();
        const defaultTimeEnd = moment()
            .startOf("month")
            .add(1, "month")
            .toDate();
        const timeSteps = {
            second: 1,
            minute: 1,
            hour: 1,
            day: 1,
            month: 1,
            year: 1
        };

        var groups = this.state.hello;

        const items = [
            {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(3, 'day')},
            {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(7, 'day')}
        ];
        this.state = {
            groups,items,
            defaultTimeStart,
            defaultTimeEnd,
            timeSteps
        };
    }

    render() {
        const {
            groups,items,
            timeSteps,
            defaultTimeStart,
            defaultTimeEnd
        } = this.state;

        return (
        <Timeline groups={groups}
                  items={items}
                  defaultTimeStart={defaultTimeStart}
                  defaultTimeEnd={defaultTimeEnd}
                  stackItems
                  timeSteps={timeSteps}
                  sidebarContent={<div>Absences</div>}
        />
            /*<Timeline
                groups={groups}
                items={items}
                keys={keys}
                fullUpdate
                timeSteps={timeSteps}
                sidebarContent={<div>Above The Left</div>}
                itemsSorted
                itemTouchSendsClick={false}
                stackItems
                itemHeightRatio={0.75}
                showCursorLine
                canMove={false}
                canResize={false}
                defaultTimeStart={defaultTimeStart}
                defaultTimeEnd={defaultTimeEnd}
                onCanvasClick={this.handleCanvasClick}
                onCanvasContextMenu={this.handleCanvasContextMenu}
                onItemClick={this.handleItemClick}
                onItemSelect={this.handleItemSelect}
                onItemContextMenu={this.handleItemContextMenu}
                onItemDoubleClick={this.handleItemDoubleClick}
                onTimeChange={this.handleTimeChange}
            />*/
        );
    }
}
