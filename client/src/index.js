import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './styles/index.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import App from './App';
// Service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
