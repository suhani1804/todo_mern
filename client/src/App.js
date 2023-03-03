import './App.css';
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Todo  from './components/Todo';

function App() {
  return (
  <>
    <div className='first'>
      <Header/>
      <Search/>
      <Todo/>
    </div>
  
  </>
  );
}

export default App;
