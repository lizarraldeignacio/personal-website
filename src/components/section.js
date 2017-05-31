import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalDialog from './modal_dialog';
import {
  firebaseConnect,
  dataToJS,
  pathToJS
} from 'react-redux-firebase';

/**
  Section component

  sectionName: The name of the section
  sectionDescription: The description of the section
  path: The path to the section in the firebase database
  additionalClass: Additional CSS classes of the section element
  fields: The fields that the modal dialog will contain to add elements
    to the section

**/

class Section extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleAddAction() {
    this.setState({ isOpen: true });
  }

  handleModalClose() {
    this.setState({ isOpen: false });
  }

  handleFormSubmit(element) {
    console.log(`${this.props.path}`);
    this.props.firebase.push(`${this.props.path}`, element).then(() => {
        this.setState({ isOpen: false });
    });
  }

  render() {
    //Calculates the position of the modal element, taking into account
    //the number of fields that the modal dialog will contain.
    let top = 75;
    if (this.props.fields) {
        top = Object.keys(this.props.fields).length * 10 + 40;
    }
    return (
      <section className={`o-section  t-section  ${this.props.additionalClass}`}>
          {this.props.auth &&
            <Modal
              isOpen={this.state.isOpen}
              contentLabel="Modal"
              onRequestClose={this.handleModalClose.bind(this)}
              parentSelector={() => {return document.querySelector(`#mainContainer`);}}
              style={{
                content : {
                  top                   : `${top}%`,
                  left                  : '75%',
                  right                 : '10%',
                  bottom                : 'auto',
                  marginRight           : '-25%',
                  transform             : 'translate(-100%, -110%)'
                }
              }}
            >
              <h1>{this.props.sectionName}</h1>
              <ModalDialog
                handleFormSubmit={this.handleFormSubmit.bind(this)}
                fields={this.props.fields}/>
          </Modal>}
          <div className="o-section__header-bg  t-section__header"></div>
          <div className="o-section__content-bg  t-section__content"></div>

          <div className="o-container">
              <div id={`section_${this.props.sectionName}`} className="o-section__container">

                  <header className="o-section__header  t-section__header">
                      <div className="o-content">
                          <h2 className="o-section__heading inline-elem">
                            {this.props.sectionName}
                          </h2>
                          {this.props.auth && <div className="materialize-iso inline-elem btn-add">
                            <a className="btn-floating btn-tiny waves-effect waves-light blue darken-1" href="javascript:void(0);" onClick={this.handleAddAction.bind(this)}>
                              <i className="material-icons">add</i>
                            </a>
                          </div>}
                          <div className="o-content__body  o-section__description">
                              {this.props.sectionDescription}
                          </div>
                      </div>
                  </header>

                  <div className="o-section__content  t-section__content">
                    {this.props.children}
                  </div>

              </div>
          </div>

      </section>
    );
  }
}

export default firebaseConnect()(Section);
