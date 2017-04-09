import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../containers/search_bar';
// import BrowseFilter from './browse_filter';
// import BrandLogo from './brand_logo';
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
