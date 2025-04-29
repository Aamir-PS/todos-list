import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';

export default function App() {
  const onDelete =(todo) => {
    console.log("i am onDelete of todo ", todo)
    
    setTodos(todos.filter((e) =>{
      return e!==todo
    }))
    
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }


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
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
}



 