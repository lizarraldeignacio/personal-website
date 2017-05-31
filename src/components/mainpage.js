import React, { Component } from 'react';
import Header from './header';
import Section from './section';
import SimpleList from './simple_list';
import DecolineList from './decoline_list';
import TimelineList from './timeline_list';
import MediaList from './media_list';
import {
  expertiseFields,
  experienceFields,
  awardsFields,
  educationFields,
  projectsFields,
  papersFields} from './section_fields.js';
import _ from 'lodash';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firebaseConnect,
  dataToJS,
  pathToJS,
  orderedToJS
} from 'react-redux-firebase';

class MainPage extends Component {

  //const customStyle = ;

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="main">
        <div className="c-preloader  js-preloader">
            <div className="c-preloader__spinner  t-preloader__spinner"></div>
        </div>

        <div id="mainContainer" className="c-main-container  js-main-container">
            <Header/>

            <Section
              sectionName = {"Expertise"}
              fields = {expertiseFields}
              auth = {this.props.auth}
              path = '/expertise'
            >
              <SimpleList
                elements = {this.props.expertise}
                path = '/expertise'
                itemClass = {"o-grid__col-sm-6"}
                itemIcon = {<i className="fa fa-certificate" aria-hidden="true"></i>}
                auth = {this.props.auth}
              />
            </Section>

            <Section
              sectionName = {"Publications"}
              fields = {papersFields}
              auth = {this.props.auth}
              path = '/publications'
            >
              <SimpleList
                elements = {this.props.publications}
                path = '/publications'
                itemClass = {"o-grid__col-sm-12"}
                itemIcon = {<i className="fa fa-file-text" aria-hidden="true"></i>}
                auth = {this.props.auth}
              />
            </Section>

            <Section
              sectionName = {"Experience"}
              fields = {experienceFields}
              auth = {this.props.auth}
              path = '/experience'
            >

              <TimelineList
                elements = {this.props.experience}
                path = '/experience'
                listClass = {"a-experience-timeline  c-timeline  t-border-color"}
                auth = {this.props.auth}
              />
            </Section>

            <Section
              sectionName = {"Projects"}
              fields = {projectsFields}
              auth = {this.props.auth}
              path = '/projects'
            >
              <MediaList
                elements = {this.props.projects}
                path = '/projects'
                auth = {this.props.auth}
                itemIcon = {<i className="fa  fa-github-alt"></i>}
              />
            </Section>

            <Section
              sectionName = {"Awards"}
              fields = {awardsFields}
              auth = {this.props.auth}
              path = '/awards'
            >
              <DecolineList
                elements = {this.props.awards}
                path = '/awards'
                auth = {this.props.auth}
                itemIconRemove = {this.props.auth && <i className="fa fa-minus" aria-hidden="true"></i>}
              />
            </Section>

            <Section
              sectionName = {"Education"}
              fields = {educationFields}
              auth = {this.props.auth}
              path = '/education'
              >
              <TimelineList
                elements = {this.props.education}
                path = '/education'
                listClass = {"a-education-timeline  c-timeline  t-border-color  o-section__full-top-space"}
                auth = {this.props.auth}
              />
            </Section>


            <Section
              sectionName = {"Contact"}
              sectionDescription = {"Send me an email!"}
              additionalClass = {"o-section--footer"}
              auth = {false}
            >
              <div className="c-footer__contact">
                  <div className="o-grid">

                  <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="o-content">
                          <div className="o-content__body">
                              <a href="#" target="_blank" className="t-link-container">
                                  <h4>Email</h4>
                                  <p>
                                      <span className="t-link-container__item--blended">
                                          lizarralde.ignacio@gmail.com
                                      </span>
                                  </p>
                              </a>
                          </div>
                      </div>
                  </div>
                </div>
              </div>

              <hr className="c-footer__contact-divider" />

              <div className="o-content">
                  <div className="c-footer__bottom">
                      <div className="c-footer__brand">

                          <div className="c-brand">
                              <div className="o-content__body">
                                  <h1 className="c-brand__title  t-title">
                                      <span className="c-brand__sizer  c-brand__sizer--sm">
                                          <span className="a-footer  c-brand__first-word  t-title__first-word">
                                              Ignacio
                                          </span>
                                          <span className="a-footer  c-brand__second-word  t-title__second-word">
                                              Lizarralde
                                          </span>
                                      </span>
                                  </h1>
                              </div>
                          </div>

                      </div>

                      <ul className="c-header__social-buttons  c-social-buttons">
                          <li className="a-header">
                              <a href="https://www.github.com/lizarraldeignacio" target="_blank" className="c-social-button  t-social-button">
                                  <i className="fa  fa-lg  fa-github"></i>
                              </a>
                          </li>
                          <li className="a-header">
                              <a href="http://stackoverflow.com/users/7361419/ignaciol" target="_blank" className="c-social-button  t-social-button">
                                  <i className="fa  fa-lg  fa-stack-overflow"></i>
                              </a>
                          </li>
                          <li className="a-header">
                              <a href="https://www.linkedin.com/in/ignaciolizarralde/" target="_blank" className="c-social-button  t-social-button">
                                  <i className="fa  fa-lg  fa-linkedin-square"></i>
                              </a>
                          </li>
                      </ul>

                  </div>
              </div>
            </Section>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ firebase }) {
  return {
    //Patch, orderByChild is not working properly
    auth: pathToJS(firebase, 'auth'),
    //publications: _.sortBy(dataToJS(firebase, '/publications'), (obj) => {return -obj.year;}),
    publications: orderedToJS(firebase, '/publications'),
    expertise: dataToJS(firebase, '/expertise'),
    experience: dataToJS(firebase, '/experience'),
    education: dataToJS(firebase, '/education'),
    awards: dataToJS(firebase, '/awards'),
    projects: dataToJS(firebase, '/projects')
  };
}

export default compose(connect(mapStateToProps),
firebaseConnect(['/publications#orderByChild=year', '/expertise', '/experience', '/education', '/awards', '/projects']))(MainPage);
