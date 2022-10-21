import React from 'react';
import styled from 'styled-components';
import spinner from '../images/spinner.gif'

const SpinnerImg = styled.img`
  float: right;
  margin-right: 5px;
`;

export default class Spinner extends React.Component {

  render() {
    return (
        <SpinnerImg src={spinner} alt="spinner" height="40" />
    );
  }
}