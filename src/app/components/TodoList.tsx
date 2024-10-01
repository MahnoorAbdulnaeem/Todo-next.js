'use client'

import { useState } from "react"

interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

const TodoList = () => {
   const [todos, setTodos] = useState<Todo[]>([]);
   const [inputValue, setInputValue] = useState("");

   // add of items 
   const addTodo = () => {
      if (inputValue.trim() === "") return;
      setTodos([
         ...todos,
         { id: Date.now(), text: inputValue, completed: false },
      ]);


      setInputValue("");
   };

   // add value id
   const toggleTodo = (id: number) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      )
   };




   // delete todo section
   const deleteTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id))
   }

   return (
      <div className="flex flex-col  min-h-screen "  style={{
         backgroundImage: 'url("/image/1.jpg")',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
       }}>

     
         <header className="bg-slate-500 text-center text-white py-4">
            <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-3xl font-serif text-white">Todo List By Mahnoor</h1>
               <p className="text-white font-serif mt-3">Organize your work with our Next.js Todo List App.</p>
            </div>
         </header>



         <main className="flex-grow flex items-center justify-center">
            <div className="max-w-md mx-auto p-4 bg-slate-300 rounded-lg shadow-md">
               <div className="mb-4">
                  <div className="flex">

                     <input type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} className="flex-grow p-2 border border-gray-400 rounded-lg" placeholder="Add a new task ...."
                     />
                     <button onClick={addTodo} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-sky-400">
                        Add
                     </button>
                  </div>
               </div>


               <ul className="space-y-2">

                  {todos.map((todo) => (
                     <li key={todo.id}
                        className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${todo.completed ? "bg-line-400 line-through" : "bg-white"

                           }`}
                     >
                        <span>{todo.text}</span>

                        <div>
                           <button onClick={() => toggleTodo(todo.id)} className="px-2 py-1 text-sm bg-yellow-500 rounded-lg hover:bg-gray-300">

                              {todo.completed ? "Undo" : "completed"}

                           </button>



                           <button onClick={() => deleteTodo(todo.id)} className=" text-white px-2 py-1 text-sm bg-red-500 rounded-lg hover:bg-gray-300">

                              Delete
                           </button>












                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </main>
      </div>

   );


};

export default TodoList;