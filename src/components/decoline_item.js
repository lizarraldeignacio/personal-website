import React, { Component } from 'react';

/**
  DecolineItem atomic element of DecoLine list

  Params:
    title: The title of the element
    description: The description of the element
    remove: A function to handle the removal of this item from the list
    auth: A flag that indicates if the user is authenticated or not
**/
class DecolineItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="o-grid__col-md-4  o-grid__col-sm-6">
        <div className="o-media  o-media--block">
          <div className="o-content">
            <hr className="c-deco-line  t-primary-color-line" />
            <div className="o-content__body">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
          </div>
          {this.props.auth &&
            <div className="o-media__figure inline-elem-rigth">
              <div className="materialize-iso inline-elem btn-add">
                <a className="btn-floating btn-tiny waves-effect waves-light red"
                  href="javascript:void(0);"
                  onClick={() => {this.props.remove(this.props.title)}}>
                  <i className="material-icons">clear</i>
                </a>
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default DecolineItem;
