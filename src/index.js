import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
//import App from './App';
import Room from './Room';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
  <div><App name="Waqas Wahid" age="23"/></div>,
  document.getElementById('root')
);
*/
// import { MediaCard } from './MediaCard';
// import logo from './logo.svg';
//import Gate from './Gate';

ReactDOM.render(
  <React.StrictMode>
    <Room></Room>
  
    
    {/* <Gate /> */}
      {/* <MediaCard title='My React App' body='This is for my assignment' imageUrl={logo} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


/*
ReactDOM.render(
  React.createElement('div', null, "Hello world with createElement"),
  //<div><App/></div>, this code is for accessing app.js components
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
