import React from 'react';
import ReactDOM from 'react-dom';
import PlayerGraph from '../components/PlayerGraph';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerGraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});