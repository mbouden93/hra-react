import React, { Component } from "react";
import moment from "moment";

import Timeline from "react-calendar-timeline/lib";

export default class CustomTimeLine extends Component {
    constructor(props) {
        super(props);

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
        const groups = [
            {id: 1, title: 'group 1'},
            {id: 2, title: 'group 2'}
        ];

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
