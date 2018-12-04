import React from 'react';
import {connect} from 'react-redux';
import { fetchData } from '~/app/containers/CV/actions';
import CV from '~/app/containers/CV';

class Resume extends React.Component {
  render() {
    return <CV { ...this.props}/>;
  }
};


export default Resume;