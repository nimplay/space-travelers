/** @format */

import { cleanup } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import ProfileItem from '../ProfileItem';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<ProfileItem item="Falcon9" />, div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<ProfileItem item="Blue Origin" />).toJSON();
  expect(tree).toMatchSnapshot();
});
