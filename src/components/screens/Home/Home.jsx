import { useState } from "react";
import TodoItem from "../../item/TodoItem";
import { CreateTodoField } from "./create-todo-field/CreateTodoField";

// creating an object
const data = [
  {
    _id: "1",
    title: "Front End",
    // is infront of verb in order indicate that it is a boolean isCompleted, in our case task is not completed so we put false
    description: "HTML, CSS, Javascript, React",
    isCompleted: false,
  },
  {
    _id: "2",
    title: "Back End",
    description: "NodeJs, Express, SQL, MongoDB",
    isCompleted: false,
  },
];
const Home = () => {
  const [todos, setTodos] = useState(data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // data array of object will always be there, it is original state and now whenever need to do something with todos (copy of array of data) i use todos and data array always stay the same.
  // completed task that will recieve id of todo
  const changeTodo = (id) => {
    // can not muttate todos so need create copy of it
    const copy = [...todos];
    // looking for id
    const current = copy.find((t) => t._id === id);
    // once find change value (to true)
    current.isCompleted = !current.isCompleted;
    //rewriting array

    setTodos(copy);
    // passing to map of TodoItem
  };
  // remove Todo
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t._id !== id));
  };

  // add ToDo, receive title
  const addTodo = (title, description) => {
    setTodos([
      // will add first new todo and then rest of todos.
      {
        _id: new Date(),
        title, // recieving title
        isCompleted: false,
        description,
      },
      ...todos,
    ]);
  };
  // h-screen - height of screen 100vh
  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
      {/* map though todos not data */}
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField
        addTodo={addTodo}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};
export default Home;
