import { useState, useEffect } from "react";

const Name = () => {

   const [state, setState] = useState({
      title: 'Счётчик',
      date: Date.now()
   });

   function updateTitle() {
      setState(prev => {
         return {
            ...prev,
            'title': 'я заменила текст, дата осталась:)'
         }
      })
   }
   return (
      <div className="block-1 orange">
         <h3>Изменение названия</h3>
         <button onClick={() => updateTitle()}>Изменить название</button>
         <pre>{JSON.stringify(state, null, 1)}</pre>
      </div >

   )
}
export default Name;