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
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);