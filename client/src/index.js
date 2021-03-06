import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './service-worker';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


// serviceWorkerRegistration.unregister();
reportWebVitals();
serviceWorker.register();