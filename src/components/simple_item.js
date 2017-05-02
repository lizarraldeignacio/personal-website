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
              {this.props.itemLink ? (
              <a href={this.props.itemLink} target="_blank" className="t-link-container o-media__body  o-content__body">
                  <h3 className="t-link-container__item">
                    {this.props.itemTitle}
                  </h3>
                  <p>{this.props.itemText}</p>
              </a>)
            : (<div className="o-media__body  o-content__body">
                <h3>{this.props.itemTitle}</h3>
                <p>{this.props.itemText}</p>
            </div>)}
          </div>
      </div>
    );
  }
}

export default SimpleItem;
