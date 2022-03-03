import React, { useState } from "react";

function NewTaskForm({cat,addingTask}) {
  const [text, newTask] = useState("")
  const [category, setCat ] = useState("Code")


  const newCat = cat.filter((cat)=> cat !== "All")
  const selectCat = newCat.map((cat)=>{
    return <option key={cat} value={cat}>{cat}</option>
  })
  
  function newTaskHandler(event){
   event.preventDefault()
   addingTask({text,category})
    console.log(event.target)
  }


  return (
    <form className="new-task-form" onSubmit={newTaskHandler}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(event)=>newTask(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event)=>setCat(event.target.value)}>
          {selectCat}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
