import React from 'react';
import './style.css';
import { MediaCard } from './MediaCard';

function App({name1,name2}) {
  
  return (
    <div className="App">
      <h2>Hello teachers!</h2>
      <ul className='teacher-list'>
      <li>5+10 = {5+10} <i>(expression used)</i></li>
      <li>{name1} <i>(recived as props)</i></li>
      <li>{name2} <i>(recived as props)</i></li>
      </ul>
      <p className='text'>Class held on 6 june 2020</p>
    </div>
  );
}

export default App;