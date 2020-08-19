import React from "react";

function AddToDo(props) {
  const [submitted, setSubmitted] = React.useState(false);
  const [title, setTitle] = React.useState("");
  function handleSubmit(event) {
    alert("Form submitted" + title);
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
