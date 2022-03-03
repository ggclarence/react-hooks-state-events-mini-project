import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [list,setList] = useState(TASKS)
  const [cat,setCat] = useState("All")
  
  
  function dltHandler(task){
    console.log(task)
    const newList = list.filter((list)=> list.text !== task)
    setList(newList)
  }
  function handleFilter(cat){
    setCat(cat)
  }

  const displayListByCat = list.filter((list)=>{
    if (cat === "All"){
      return true
    } else {
      return list.category === cat}
  })
  
  function addTaskHandler(newTask){
    console.log(newTask)
    setList([...list, newTask])
  }
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter cat={CATEGORIES} catFilter={handleFilter}/>
      <NewTaskForm cat={CATEGORIES} addingTask={addTaskHandler}/>
      <TaskList tasks={displayListByCat} dlt={dltHandler}/>
    </div>
  );
}

export default App;
