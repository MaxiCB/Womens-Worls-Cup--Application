import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import {render, cleanup, waitForElement} from '@testing-library/react'
import axiosMock from 'axios';

afterEach(cleanup);

export default {
  get: jest.fn().mockResolvedValue({ data: {} })
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});