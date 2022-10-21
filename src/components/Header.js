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
  height: 36px;
`;

const InputSearch = styled.input`
  background: #c2c2c2;
  border: 0;
  padding: 5px;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
`

const SearchResults = styled.div`
  position: absolute;
  width: 400px;
  top: 36px;
  right: 0;
  height: calc(100vh - 36px);
  overflow: scroll;
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

        <SearchResults>
          {this.state.results && this.state.results.map(item =>
              <span>
                  <SearchResult item={item} key={item.name}></SearchResult>
              </span>
          )}

          { this.state.searching ? <Spinner /> : null }
        </SearchResults>

      </HeaderSearch>
    );
  }
}