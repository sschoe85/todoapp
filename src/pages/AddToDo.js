import React from "react";
import { postToDo } from "../api/postToDo";

function AddToDo(props) {
  const [submitted, setSubmitted] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");
  function handleSubmit(event) {
    const todo = {
      title: title,
      details: details
    }
    postToDo(todo);
    setSubmitted(true);
    event.preventDefault();
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titel:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Details:
        <input type="text" value={details} onChange={handleDetailsChange} />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddToDo;
