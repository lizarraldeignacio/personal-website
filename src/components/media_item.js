import React, { Component } from 'react';


class MediaItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="o-grid__col-xl-4  o-grid__col-sm-6">
        <div className="o-content">
           <a href={this.props.link} target="_blank" className="t-link-container">
               <div className="o-media  o-media--block">
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
               </div>
           </a>
        </div>
      </div>
    );
  }
}

export default MediaItem;
