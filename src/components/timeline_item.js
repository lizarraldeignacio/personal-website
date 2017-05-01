import React, { Component } from 'react';


class TimelineItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-timeline__item">
          <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
          <div className="o-content">
              <div className="o-grid">
                  <div className="o-grid__col-md-5">
                      <div className="c-work__timeframe">
                          {this.props.date}
                      </div>
                      <h3 className="c-work__heading">
                          {this.props.companyName}
                      </h3>
                      <h4 className="c-work__title">
                          {this.props.position}
                      </h4>
                      <div className="c-work__location">
                          {this.props.location}
                      </div>
                  </div>
                  <div className="o-grid__col-md-7">
                      <p>{this.props.description}</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default TimelineItem;
