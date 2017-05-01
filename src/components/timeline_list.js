import React, { Component } from 'react';
import TimelineItem from './timeline_item';
import _ from 'lodash';


class TimelineList extends Component {

  constructor(props) {
    super(props);
  }

  renderList() {
    return (
      _.map(this.props.elements, element => {
          return (
            <TimelineItem
              key = {element["company"] + element["position"]}
              companyName = {element["company"]}
              position = {element["position"]}
              date = {element["date"]}
              description = {element["description"]}
              location = {element["location"]}
            />
          );
        })
    );
  }

  render() {
    return (
      <div className={this.props.listClass}>
        {this.props.elements && this.renderList.bind(this)()}
      </div>
    );
  }
}

export default TimelineList;
