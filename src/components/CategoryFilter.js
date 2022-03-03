import React from "react";

function CategoryFilter({cat,catFilter}) {
  

function handleFilter(event){
  catFilter(event.target.value)
}


  const displayCats = cat.map((cat)=>{
    return <button onClick={handleFilter} key={cat} value={cat}>{cat}</button>
  })

 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCats}
    </div>
  );
}

export default CategoryFilter;
