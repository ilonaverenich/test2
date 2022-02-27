import React from 'react';
import './App.css';
import Likes from './Components/Likes';
import Value from './Components/Value';
import Name from './Components/Name';
import Effect from './Components/Effect';
import Pointer from './Components/Pointer';





function App() {

  return (
  <div className='container'>
      <Likes/> 
      <Value/> 
      <Name/>
      <Effect/>
      <Pointer/>
  </div>
  );
}

export default App;
