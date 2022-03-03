import React from "react";

function Task({text,category,dlt}) {
  
  function handleClick(event){
    console.log(event.target.value)
    dlt(event.target.value)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} value={text} className="delete">X</button>
    </div>
  );
}

export default Task;
