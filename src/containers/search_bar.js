import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuery, doSearch } from '../actions/index'
import { bindActionCreators } from 'redux';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  console.log('this is the state.query', state.query);
  return {
    value: state.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setQuery, doSearch }, dispatch)
}

class SearchBar extends Component {
    render() {
      return (
        <Navbar.Form pullLeft onSubmit={(event) => {
          event.preventDefault();
          this.props.doSearch(this.props.value);
        }}>
          <FormGroup>
            <FormControl value={this.props.value} onChange={(event)=>this.props.setQuery(event.target.value)} type="text" placeholder="Search Recipes" />
          </FormGroup>
          {' '}
          <Button type="submit">Go</Button>
        </Navbar.Form>
      )
    }

    // onInputChange(term) {
    //   this.setState({term});
    //   this.props.onSearchTermChange(term)
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
