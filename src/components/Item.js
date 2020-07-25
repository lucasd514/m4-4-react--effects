import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

const Item = (props) => {
  const getQty = props.name.toLowerCase();
  const getThisQty = props.purchasedItems[0][getQty];
  return (
    <button
      onClick={() => props.handleClick(props.name, props.cost, props.value)}
    >
      <div>
        <p>{props.name}</p>
        <p>{props.cost}</p>
        <div>{props.value}</div>
      </div>
      <div>{getThisQty}</div>
    </button>
  );
};
export default Item;
