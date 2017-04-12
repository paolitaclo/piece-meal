import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { SearchBar } from './search_bar';

describe('Search', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar>Search</SearchBar>, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <SearchBar>Search</SearchBar>
    );
    expect(toJson(component)).toMatchSnapshot();

  });
});
