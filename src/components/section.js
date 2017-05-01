import React, { Component } from 'react';


class Section extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`o-section  t-section  ${this.props.additionalClass}`}>

          <div className="o-section__header-bg  t-section__header"></div>
          <div className="o-section__content-bg  t-section__content"></div>

          <div className="o-container">
              <div className="o-section__container">

                  <header className="o-section__header  t-section__header">
                      <div className="o-content">
                          <h2 className="o-section__heading">
                              {this.props.sectionName}
                          </h2>
                          <div className="o-content__body  o-section__description">
                              {this.props.sectionDescription}
                          </div>
                      </div>
                  </header>

                  <div className="o-section__content  t-section__content  ">
                    {this.props.children}
                  </div>

              </div>
          </div>

      </section>
    );
  }
}

export default Section;
