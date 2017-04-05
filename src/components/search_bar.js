import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class SearchBar extends Component {
    constructor(props) {
      super(props);

      this.state = { term: '' };
    }

    render() {
      return (
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search Recipes" />
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

export default SearchBar;
