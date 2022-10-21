import React from 'react';
import styled from 'styled-components';
import { search } from '../helpers/API';
import SearchResult from './SearchResult';
import Spinner from './Spinner';

const StyledCounter = styled.div`
  background: red;
`;
const Paragraph = styled.p`
  background: blue;
`;
const Button = styled.button`
  background: yellow;
`;

export default class Header extends React.Component {

  state = { count: 0, results: [] };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });


  handleChange = async (event) => {
    console.log(event.target.value);
    let results = (await search(event.target.value)).data.results;

    console.log(results);

    this.setState({results : results });

    console.log(this.state.results);
    console.log(typeof this.state.results.map);
  }

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>


        <input onChange={this.handleChange}></input>



        {this.state.results && this.state.results.map(item =>
            <span>
                <SearchResult item={item} key={item.name}></SearchResult>
                {/* <div>{item.name}</div> */}
            </span>
        )}

        <Spinner />


      </StyledCounter>
    );
  }
}