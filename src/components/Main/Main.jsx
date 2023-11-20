import React, { useState } from "react";
import List from "../ListItem/ListItem";
import './styles.css';

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const addItem = (event) => {
    event.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List
              key={index}
              id={index}
              text={todoItem}
              handleClick={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
