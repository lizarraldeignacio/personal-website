import React, { Component } from 'react';
import DecolineItem from './decoline_item';
import _ from 'lodash';
import { firebaseConnect } from 'react-redux-firebase';

/**
  DecolineList list of Decoline elements

  Params:
    elements: The elements that the list will contain
    path: The path of the firebase database of the list
    itemIconRemove: The icon of the remove action of each element
    auth: A flag that indicates if the user is authenticated or not
**/
class DecolineList extends Component {

  constructor(props) {
    super(props);
  }

  remove(title) {
      const key = _.findKey(this.props.elements,
              (item) => {return title == item["title"]});
      this.props.firebase.remove(`${this.props.path}/${key}`);
  }

  renderList() {
    return (
      _.map(this.props.elements, element => {
          return (
            <DecolineItem
              key = {element["title"]}
              title = {element["title"]}
              description = {element["description"]}
              itemIconRemove = {this.props.itemIconRemove}
              remove = {this.remove.bind(this)}
              auth = {this.props.auth}
            />
          );
        })
    );
  }

  render() {
    return (
      <div className="o-grid">
        {this.props.elements && this.renderList.bind(this)()}
      </div>
    );
  }
}

export default firebaseConnect()(DecolineList);
