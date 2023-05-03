// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, addTodo } from "./components/feature";
// import { useState } from "react";

// function TodoItem(props) {
//   const deleteTodo = () => {
//     props.onCheck(props.id);
//   };
//   return (
//     <div className="todo" onClick={deleteTodo}>
//       <input type="checkbox"></input>
//       <label>{props.text}</label>
//     </div>
//   );
// }

// function App() {
//   const [input, setInput] = useState("");
//   const c = useSelector((state) => state.todo.count);
//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();
//   const handleAddTodo = (event) => {
//     event.preventDefault();
//     dispatch(addTodo(input));
//   };

//   const handleTodoDone = (id) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <div className="App">
//       <h1>TODO List</h1>
//       <form onSubmit={handleAddTodo}>
//         <input type="text" onInput={(e) => setInput(e.target.value)} />
//         <button type="submit">+</button>
//       </form>
//       <div className="Todos">
//         {c > 0 &&
//           todos.map((todo) => (
//             <TodoItem
//               key={todo.id}
//               text={todo.text}
//               id={todo.id}
//               onCheck={handleTodoDone}
//             />
//           ))}
//         {c === 0 && <p>No todos</p>}
//       </div>{" "}
//     </div>
//   );
// }

// export default App;

import useFetch from "./hooks/useFetch";
import "./App.scss";
import _ from "lodash";
import Home from "./components/Home";

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(data);
  // console.log(_.chunk(data, 10));
  return <Home />;
};

export default App;
