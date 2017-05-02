import React, { Component } from 'react';
import MediaItem from './media_item';
import _ from 'lodash';


class MediaList extends Component {

  constructor(props) {
    super(props);
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

export default MediaList;
