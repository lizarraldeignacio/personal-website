import React, { Component } from 'react';

/**
  TimelineItem atomic element of Timeline list

  Params:
    companyName: The name of the company
    position: The position in that company
    location: The location of the job
    description: The description of the position
    date: The date of the start and the end of the job
    remove: A function to handle the removal of this item from the list
    auth: A flag that indicates if the user is authenticated or not
**/
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
                  {this.props.auth ?
                    <div className="o-grid__col-md-5">
                        <p>{this.props.description}</p>
                    </div>
                    :
                    <div className="o-grid__col-md-7">
                        <p>{this.props.description}</p>
                    </div>}
                  {this.props.auth &&
                    <div className="o-grid__col-md-2">
                        <div className="o-media__figure inline-elem">
                          <div className="materialize-iso">
                            <a className="btn-floating btn-tiny waves-effect waves-light red"
                              href="javascript:void(0);"
                              onClick={() => {
                                this.props.remove(this.props.companyName, this.props.date);
                              }}>
                              <i className="material-icons">clear</i>
                            </a>
                          </div>
                        </div>
                    </div>}
              </div>
          </div>
      </div>
    );
  }
}

export default TimelineItem;
