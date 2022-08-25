/** @format */

import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
// import renderer from 'react-test-renderer';
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
