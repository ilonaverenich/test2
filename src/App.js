import React from 'react';
import './App.css';
import Likes from './Components/Likes';
import Value from './Components/Value';
import Name from './Components/Name';
import InputRef from './Components/InputRef'; 
import Effect from './Components/Effect';





function App() {

  return (
  <div className='container'>
      <Likes/> 
      <Value/> 
      <Name/>
      <Effect/>
      <InputRef/>

  </div>
  );
}

export default App;
