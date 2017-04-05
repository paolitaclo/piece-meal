import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from './search_bar';
// import BrowseFilter from './browse_filter';
import BrandLogo from './brand_logo';
import CreateProfileButton from './create_profile_button';

const NavigationBar = () => {
  return (
    <Navbar>
      <BrandLogo />
      <SearchBar />
      <CreateProfileButton />
    </Navbar>
  )
}

export default NavigationBar;
