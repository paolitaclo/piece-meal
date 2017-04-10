import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../../containers/search-bar/search_bar';
import CreateProfileButton from './create_profile_button';

const NavigationBar = ({ profile }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Piece-Meal</a>
        </Navbar.Brand>
      </Navbar.Header>
      <SearchBar />
      <Navbar.Text pullRight>
          <a onClick={()=> onCreateProfile()} href="#">{profile}</a>
      </Navbar.Text>
    </Navbar>
  )
}

export default NavigationBar;
