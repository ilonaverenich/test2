import { useState, useEffect, useCallback } from "react";

const Value = () => {

   const [value, setValue] = useState('');
   let verifyNumber = (e) => {
      return (e.target.value >= 1 && e.target.value <= 10) && setValue(e.target.value)
   }
   let random = Math.floor(Math.random() * 9 + 1);

   useEffect(() => console.log('-----------'), [random])

   let check = () => {
      return value === random ? setValue('Ты угадал') : setValue('Ты не угадал, попробуй еще раз!)')
   }
   console.log(random)
   return (
      <div className="block-1 green">
         <h3>Пример использования контрольруемой переменной</h3>

         <input type="text" value={value} placeholder='Введите число от 1 до 10' onChange={
            (e) => { verifyNumber(e) }} />

         <button onClick={() => check()}>Check</button>
         <button onClick={() => setValue('')}> Clear</button >
         <h2>{value}</h2>
      </div >

   )
}
export default Value;