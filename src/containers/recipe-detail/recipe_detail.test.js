import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RecipeDetail } from './recipe_detail';

describe('Recipe Detail', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeDetail>Recipe</RecipeDetail>, div);
  });

  test('snapshots', () => {
    const component = shallow(
      <RecipeDetail>Recipe</RecipeDetail>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
