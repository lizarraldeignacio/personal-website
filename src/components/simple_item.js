import React, { Component } from 'react';

/**
  SimpleItem atomic element of Simple list

  Params:
    itemClass: The css class of the element
    itemTitle: The title of the element
    itemText: The description of the element
    itemLink: The URL of the element
    itemIcon: The icon of the element
    remove: A function to handle the removal of this item from the list
    auth: A flag that indicates if the user is authenticated or not
**/
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
              </div>)
              }
            {this.props.auth &&
              <div className="o-media__figure">
                <div className="materialize-iso inline-elem btn-add">
                  <a className="btn-floating btn-tiny waves-effect waves-light red"
                    href="javascript:void(0);"
                    onClick={() => {this.props.remove(this.props.itemTitle)}}>
                    <i className="material-icons">clear</i>
                  </a>
                </div>
              </div>
            }
          </div>
      </div>
    );
  }
}

export default SimpleItem;
