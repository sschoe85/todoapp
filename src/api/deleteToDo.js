export async function deleteToDo(toDoID) {
    const response = await fetch(
      `http://localhost:3333/todos/{toDoID}`, {
        method: "DELETE"}

    );
    if (!response.ok) {
      throw new Error(response);
    }
  }