import { useState } from "react";

const Likes = () => {

   const [likes, setLikes] = useState(0);

   function increment() {
      setLikes(likes + 1)
   }
   function decrement() {
      return likes <= 0 ? likes : setLikes(likes - 1)
   }
   return (
      <div className="block-1 pink">
         <h3>Пример использования хука useState</h3>
         <h1>{likes}</h1>
         <button onClick={increment}>Like</button>
         <button onClick={decrement}> Dislike </button>
      </div >

   )
}
export default Likes;