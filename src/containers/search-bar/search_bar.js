import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setQuery, doSearch } from '../../actions/index'
import { bindActionCreators } from 'redux';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    value: state.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setQuery, doSearch }, dispatch)
}

export class SearchBar extends Component {
    render() {
      return (
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl value={this.props.value} onChange={(event)=>this.props.setQuery(event.target.value)} type="text" placeholder="Search Recipes" />
          </FormGroup>
          {' '}
          <Button onClick={(event) => {
            this.props.doSearch(this.props.value)}}>Go</Button>
        </Navbar.Form>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
