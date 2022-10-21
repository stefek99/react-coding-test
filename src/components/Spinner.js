import React from 'react';
import spinner from '../images/spinner.gif'

export default class Spinner extends React.Component {

  render() {
    return (
        <img src={spinner} alt="spinner" height="40" />
    );
  }
}