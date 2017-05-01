import React, { Component } from 'react';


class SimpleItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.itemClass}>
          <div className="o-media  o-media--block  o-content">
              <div className="o-media__figure">
                  <div className="t-primary-color">
                      {this.props.itemIcon}
                  </div>
              </div>
              <div className="o-media__body  o-content__body">
                  <h3>{this.props.itemTitle}</h3>
                  <p>{this.props.itemText}</p>
              </div>
          </div>
      </div>
    );
  }
}

export default SimpleItem;
