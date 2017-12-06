import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Signup';
import Feed from './Feed';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Signup />, document.getElementById('sign-up'));
ReactDOM.render(<Feed />, document.getElementById('feed'));
registerServiceWorker();
