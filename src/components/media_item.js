import React, { Component } from 'react';

/**
  MediaItem atomic element of Media list

  Params:
    title: The title of the element
    description: The description of the element
    link: The URL of the element
    itemIcon: The icon of the element
    remove: A function to handle the removal of this item from the list
    auth: A flag that indicates if the user is authenticated or not
**/
class MediaItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="o-grid__col-xl-4  o-grid__col-sm-6">

        <div className="o-content">
          <div className="o-media  o-media--block">
            <a href={this.props.link} target="_blank" className="t-link-container">
                   <div className="o-media__figure">
                     <div className="c-profile__icon">
                         {this.props.itemIcon}
                     </div>
                   </div>
                   <div className="o-media__body  o-content__body">
                       <h3 className="t-link-container__item">
                           {this.props.title}
                       </h3>
                       <p>{this.props.description}</p>
                   </div>

           </a>
           {this.props.auth &&
             <div className="o-media__figure">
               <div className="materialize-iso inline-elem-right">
                 <a className="btn-floating btn-tiny waves-effect waves-light red btn-right"
                   href="javascript:void(0);"
                   onClick={() => {this.props.remove(this.props.title)}}>
                   <i className="material-icons">clear</i>
                 </a>
               </div>
             </div>
           }
           </div>

        </div>
      </div>
    );
  }
}

export default MediaItem;
