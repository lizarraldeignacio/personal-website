import React, { Component } from 'react';


class DecolineItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="o-grid__col-md-4  o-grid__col-sm-6">
          <div className="o-content">
              <hr className="c-deco-line  t-primary-color-line" />
              <div className="o-content__body">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.description}</p>
              </div>
          </div>
      </div>
    );
  }
}

export default DecolineItem;
