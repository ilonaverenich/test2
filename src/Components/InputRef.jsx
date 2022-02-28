import { useState, useRef, useEffect } from "react";

const InputRef = () => {
   const [counter, setCounter] = useState(0);

   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');

   const nameInputRef = useRef()
   const surnameInputRef = useRef()

   const ref = useRef();
   useEffect(() => {
      ref.current = 0;
   }, []);
   let handlerKeyUp1 = (e) => {
      if (e.key === 'Enter') {
         surnameInputRef.current.focus()
      }
   }
   let handlerKeyUp2 = (e) => {
      if (e.key === 'Enter') {
         nameInputRef.current.focus()
      }
   }
   return (
      <div className="block-1 green">
         <h3>Пример с использованием useRef (без изменения)</h3>
         <button onClick={() => setCounter(ref.current++)}>На меня нажали {ref.current} раз</button>
         <br />
         <input
            ref={nameInputRef}
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={handlerKeyUp1}
         />
         <br />
         <input
            ref={surnameInputRef}
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            onKeyUp={handlerKeyUp2}
         />
      </div >

   )
}
export default InputRef;