import React from "react";
import "./listItem.css";
import { Link } from "react-router-dom";

function ListItem(props) {
  return (
   <Link className="listItem" to={props.href}> 
      {props.children}
      </Link>
  );
}

export default ListItem;