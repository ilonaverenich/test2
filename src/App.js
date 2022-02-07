import React, {useState,Fragment} from 'react';
import './App.css';


const Components =()=>{
  const [text,setText]= useState('');
  const valid = (e)=>{
    e.length<5 ?  setText(e): setText('error')
  }
  return (
    <>
        {text}
        <input onChange={(event)=>valid(event.target.value)}value = {text}/>
    </>
  )}


function App() {

  return (
      <div>
          <Components name={'Ilona'}/>
      </div>
  );
}

export default App;
