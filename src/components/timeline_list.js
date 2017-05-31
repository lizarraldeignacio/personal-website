import React, { Component } from 'react';
import TimelineItem from './timeline_item';
import _ from 'lodash';
import { firebaseConnect } from 'react-redux-firebase';

/**
  TimelineList list of Timeline elements

  Params:
    elements: The elements that the list will contain
    path: The path of the firebase database of the list
    listClass: The CSS class of the list
    itemIcon: The icon of each element
    itemIconRemove: The icon of the remove action of each element
    auth: A flag that indicates if the user is authenticated or not
**/
class TimelineList extends Component {

  constructor(props) {
    super(props);
  }

  remove(companyName, date) {
      const key = _.findKey(this.props.elements,
              (item) => {
                return companyName == item["company"] && date == item["date"];
              });
      this.props.firebase.remove(`${this.props.path}/${key}`);
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
              remove = {this.remove.bind(this)}
              auth = {this.props.auth}
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

export default firebaseConnect()(TimelineList);
