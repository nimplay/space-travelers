/** @format */
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import MyProfilePage from '../MyProfilePage';

afterEach(cleanup);

describe('Rocket component', () => {
  test('Renders Rocket component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MyProfilePage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
