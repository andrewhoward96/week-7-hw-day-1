import './App.css';
import React, { useState }  from 'react';

function App() {

  const [category, setcategory] =useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"},
  ]);

  const[newCategory, setNewCategory] = useState("");
  const[priority, setNewPriority] = useState("");

  const categoryNodes = category.map((category,index)=> {
    return(
      <li key={index} className={category.priority === 'high' ? "high-priority": "low-priority"}><span>{category.name}</span>
      </li>
    )
  })


  const handecategoryInput = (event) => {
    setNewCategory(event.target.value)
  }

  const handleRadioSelect = (event) => {
    setNewPriority(event.target.value)
  }

  const savenewCategory = (event) => {
    event.preventDefault();
    const copycategory = [...category]
    copycategory.push({name: newCategory, priority})
    setcategory(copycategory)
    setNewCategory("")
  }

  

  return (
    <div className="App">

      <h1>ToDo's</h1>

      <hr></hr>

      <ul>
        {categoryNodes}
      </ul>

      <form onSubmit={savenewCategory}>
      <label htmlFor="new-category"></label>
      <input id="new-category" type="text" value={newCategory} onChange={handecategoryInput} />
      <input type="submit" value="New Category"/>
      <div className='radio-buttons' onChange={handleRadioSelect}>
        <label>High</label>
        <input id='high-radio' type="radio" value="high" name='priority'></input>
        <label>Low</label>
        <input id='low-radio' type="radio" value="low" name='priority'></input>
      </div>

      </form>

    </div>
  );
}

export default App;
