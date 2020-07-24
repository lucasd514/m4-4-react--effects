import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

const Item = (props) => {
  const getQuanties = props.name.toLowerCase();
  console.log(getQuanties);
  return (
    <button onClick={() => props.handleClick()}>
      <div>
        <p>{props.name}</p>
        <p>{props.cost}</p>
        <div>{props.value}</div>
      </div>
      <div>{props.purchasedItems[getQuanties]}</div>
    </button>
  );
};
export default Item;
