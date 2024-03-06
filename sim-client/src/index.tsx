import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from 'history';
import {store, StoreContext} from './app/stores/Store';

export const history = createBrowserHistory();


ReactDOM.render(

  <StoreContext.Provider value={store}>
  
      <App />
 
  </StoreContext.Provider>
  ,
  
  document.getElementById('root')
);

reportWebVitals();
