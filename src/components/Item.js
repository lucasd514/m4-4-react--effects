import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

const Item = (props) => {
  return (
    <button>
      <div>
        <p>{props.name}</p>
        <p>{props.cost}</p>
      </div>
      <div>{props.value}</div>
    </button>
  );
};
export default Item;
