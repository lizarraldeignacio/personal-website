import React, { Component } from 'react';
import DecolineItem from './decoline_item';
import _ from 'lodash';


class DecolineList extends Component {

  constructor(props) {
    super(props);
  }

  renderList() {
    return (
      _.map(this.props.elements, element => {
          return (
            <DecolineItem
              key = {element["title"]}
              title = {element["title"]}
              description = {element["description"]}
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

export default DecolineList;
