import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// General smoke test to see if the app runs without any errors, where there's smoke there is fire!
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
