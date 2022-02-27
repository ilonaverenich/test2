import { useState, useEffect } from "react";

const Effect = () => {
   const [type, setType] = useState('users');
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then(response => response.json())
         .then(json => setData(json[0]))

   }, [type])
   console.log(data)
   useEffect(() => { console.log('compDidMount') }, [])
   return (
      <div className="block-1 blue">
         <h3>Ресурс: {type}</h3>

         <button onClick={() => setType('users')}>Пользователи</button>
         <button onClick={() => setType('todos')}>ToDo</button>
         <button onClick={() => setType('posts')}>Посты</button>
         <p>{JSON.stringify(data, null, 1)}</p>
      </div >

   )
}
export default Effect;