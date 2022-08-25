import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import RocketsPage from '../RocketsPage';

describe('Rocket component', () => {
  test('Renders Rocket component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <RocketsPage />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
