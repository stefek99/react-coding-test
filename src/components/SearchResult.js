import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  background: red;
`;

export default class SearchResult extends React.Component {

  baseURL = "https://www.amazon.co.uk/s?k=";

  render() {
    return (
      <Result>
        <img src="https://via.placeholder.com/100"></img>
        <a href={this.baseURL + this.props.item.name}>{this.props.item.name}</a>
      </Result>
    );
  }
}