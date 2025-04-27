import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';

export default function App() {
  const onDelete =(todo) => {
    console.log("i am onDelete of todo ", todo)
    // Deleting this way in react does work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    setTodos(todos.filter((e) =>{
      return e!==todo
    }))
    
  }
  // let todos = [
    const [todos, setTodos] = useState([
    {
    sno: 1,
    title: "go to the market 1 ",
    desc: "Tou need to go to  the market to get this job done"
    },
    {
      sno: 2,
      title: "go to the market 2",
      desc: "Tou need to go to  the shop to get this job done"
    },
    {
      sno: 3,
      title: "go to the market 3",
      desc: "Tou need to go to  the graund to get this job done"
    }
  ]);
  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
    {/* <Header/> */}
    <Todos todos={todos} onDelete={onDelete}/>
    <AddTodo />
    <Footer />
    </>
  );
}



 