/** @format */

import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import Rocket from '../Rocket';
import store from '../../redux/configureStore';

afterEach(cleanup);

describe('Rocket component', () => {
  test('Renders Rocket component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Rocket />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
