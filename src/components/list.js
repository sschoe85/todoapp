import React from "react";

function List(props) {
  return <nav className="list">{props.children}</nav>;
}

export default List;