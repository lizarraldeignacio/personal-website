import React, { Component } from 'react';
import Header from './header';
import Section from './section';
import SimpleList from './simple_list';
import DecolineList from './decoline_list';
import TimelineList from './timeline_list';
import MediaList from './media_list';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from 'react-redux-firebase';


class App extends Component {
  render() {
    return (
      <div className="c-main-container  js-main-container">
          <Header/>
          <Section
            sectionName={"Expertise"}
            sectionDescription={"Batman would be jealous"}
          >
            <SimpleList
              elements={this.props.expertise}
              itemClass={"o-grid__col-sm-6"}
              itemIcon={<i className="fa fa-certificate" aria-hidden="true"></i>}
            />
          </Section>

          <Section
            sectionName={"Publications"}
          >
            <SimpleList
              elements={this.props.publications}
              itemClass={"o-grid__col-sm-12"}
              itemIcon={<i className="fa fa-file-text" aria-hidden="true"></i>}
            />
          </Section>

          <Section
            sectionName={"Experience"}
          >
            <TimelineList
              elements={this.props.experience}
              listClass={"a-experience-timeline  c-timeline  t-border-color"}
            />
          </Section>

          <Section
            sectionName={"Projects"}
          >
            <MediaList
              elements={this.props.projects}
              itemIcon={<i className="fa  fa-lg  fa-github-alt"></i>}
            />
          </Section>

          <Section
            sectionName={"Awards"}
          >
            <DecolineList
              elements={this.props.awards}
            />
          </Section>

          <Section
            sectionName={"Education"}>
            <TimelineList
              elements={this.props.education}
              listClass={"a-education-timeline  c-timeline  t-border-color  o-section__full-top-space"}
            />
          </Section>


          <Section
            sectionName={"Contact"}
            sectionDescription={"Send me an email!"}
            additionalClass={"o-section--footer"}
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
    );
  }
}

function mapStateToProps({ firebase }) {
  return {
    publications: dataToJS(firebase, '/publications'),
    expertise: dataToJS(firebase, '/expertise'),
    experience: dataToJS(firebase, '/experience'),
    education: dataToJS(firebase, '/education'),
    awards: dataToJS(firebase, '/awards'),
    projects: dataToJS(firebase, '/projects')
  }
}

export default compose(
  firebaseConnect(['/publications', '/expertise', '/experience', '/education', '/awards', '/projects']),
  connect(mapStateToProps))(App)
