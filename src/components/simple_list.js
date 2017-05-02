import React, { Component } from 'react';
import SimpleItem from './simple_item';
import _ from 'lodash';


class SimpleList extends Component {

  constructor(props) {
    super(props);
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

export default SimpleList;
