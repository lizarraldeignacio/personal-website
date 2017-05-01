import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from 'react-redux-firebase';


class Test extends Component {

  componentWillMount() {
    console.log("Mounting");
    console.log(this.props.data);
  }

  render() {
    return (
      <div>
        {this.props.data && this.props.data["one"]["title"]}
      </div>
    );
  }
}
export default compose(
  firebaseConnect(['/publications']),
  connect(
    ({firebase}) => ({ data: dataToJS(firebase, '/publications') })
  )
)(Test)
