import React from "react";

const List = (props) => {
  return (
    <div className="content">
      <li className="li">{props.text}</li>
      <button onClick={() => props.handleClick(props.id)}>Delete</button>
    </div>

  );
}

export default List;
