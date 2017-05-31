import React, { Component } from 'react';
import MediaItem from './media_item';
import _ from 'lodash';
import { firebaseConnect } from 'react-redux-firebase';

/**
  MediaList list of Media elements

  Params:
    elements: The elements that the list will contain
    path: The path of the firebase database of the list
    itemIcon: The icon of each element
    itemIconRemove: The icon of the remove action of each element
    auth: A flag that indicates if the user is authenticated or not
**/
class MediaList extends Component {

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
            <MediaItem
              key = {element["title"]}
              itemIcon = {this.props.itemIcon}
              title = {element["title"]}
              description = {element["description"]}
              link = {element["link"]}
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

export default firebaseConnect()(MediaList);
