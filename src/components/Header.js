import React from 'react';
import styled from 'styled-components';
import { search } from '../helpers/API';
import SearchResult from './SearchResult';
import Spinner from './Spinner';

const HeaderSearch = styled.div`
  background: #e3e3e3;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 30px;
`;

const InputSearch = styled.input`
  background: #c2c2c2;
  border: 0;
  padding: 5px;
  margin-left: auto;
`

export default class Header extends React.Component {

  state = { searching : false, results: [] };

  handleChange = async (event) => {
    if (event.target.value.trim().length === 0){
        this.setState({results : [] });
    } else {
        this.setState({ searching : true })
        let results = (await search(event.target.value)).data.results;
        this.setState({ results : results, searching: false });
    }

    console.log(this.state.results);
  }

  render() {
    return (
      <HeaderSearch>

        <InputSearch onChange={this.handleChange} placeholder="Quick search..."></InputSearch>

        {this.state.results && this.state.results.map(item =>
            <span>
                <SearchResult item={item} key={item.name}></SearchResult>
            </span>
        )}

        { this.state.searching ? <Spinner /> : null }


      </HeaderSearch>
    );
  }
}