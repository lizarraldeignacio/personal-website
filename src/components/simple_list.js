import React, { Component } from 'react';
import SimpleItem from './simple_item';
import _ from 'lodash';
import { firebaseConnect } from 'react-redux-firebase';

/**
  SimpleList list of Simple elements

  Params:
    elements: The elements that the list will contain
    itemClass: The class of the elements that the list will contain
    path: The path of the firebase database of the list
    itemIcon: The icon of each element
    itemIconRemove: The icon of the remove action of each element
    auth: A flag that indicates if the user is authenticated or not
**/
class SimpleList extends Component {

  constructor(props) {
    super(props);
  }

  remove(title) {
      const key = _.find(this.props.elements,
              (item) => {return title == item["title"]}).key;
      this.props.firebase.remove(`${this.props.path}/${key}`);
  }

  renderList() {
    return (
      _.map(this.props.elements, element => {
          return (
            <SimpleItem
              key = {element["title"]}
              itemIcon = {this.props.itemIcon}
              itemClass = {this.props.itemClass}
              itemLink = {element["link"]}
              itemTitle = {element["title"]}
              itemText = {element["description"]}
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

export default firebaseConnect()(SimpleList);
