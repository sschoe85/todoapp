import React from "react";
import { postToDo } from "../api/postToDo";

function AddToDo(props) {
  const [submitted, setSubmitted] = React.useState(false);
  const [title, setTitle] = React.useState("");
  function handleSubmit(event) {
    const todo = {
      title: title
    }
    postToDo(todo);
    setSubmitted(true);
    event.preventDefault();
  }
  function handleTitleChange(event) {
    console.log(event.target.title, event.target);
    setTitle(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titel:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddToDo;
