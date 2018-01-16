import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CoveoSearchbox from 'coveo-search-ui'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
