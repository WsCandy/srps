import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './service_workers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
