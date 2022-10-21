import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  background: #e3e3e3;
  height: 80px;
  text-align: left;
  padding-top: 10px;
`;

const ResultImg = styled.img`
  float: left;
  padding: 0 10px 10px 10px;
`

const ResultLink = styled.a`
  padding-top: 10px;
  text-align: left;
`

const Description = styled.div`
  font-size: 12px;
  height: 58px;
  padding-right: 5px;
  overflow: hidden;
  line-break: anywhere;
`

export default class SearchResult extends React.Component {

  baseURL = "https://www.amazon.co.uk/s?k=";

  render() {
    return (
      <Result>
        <ResultImg src="https://via.placeholder.com/80"></ResultImg>
        <ResultLink href={this.baseURL + this.props.item.name}>{this.props.item.name}</ResultLink>
        <Description>Lorem Ipsum. Description. JSON stringify... {JSON.stringify(this.props.item)}</Description>
      </Result>
    );
  }
}