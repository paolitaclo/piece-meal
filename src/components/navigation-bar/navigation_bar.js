import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../../containers/search-bar/search_bar'; 
import CreateProfileButton from './create_profile_button';

const NavigationBar = ({ profile, onCreateProfile }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Piece-Meal</a>
        </Navbar.Brand>
      </Navbar.Header>
      <SearchBar />
      <CreateProfileButton profile={profile} onCreateProfile={onCreateProfile} />
    </Navbar>
  )
}

export default NavigationBar;
