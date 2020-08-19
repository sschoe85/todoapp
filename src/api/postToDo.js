export async function postToDo(toDo) {
    const response = await fetch(
      "http://localhost:3333/todos", {
        method: "POST", headers: {"Content-Type": "application/json"
      }, body: JSON.stringify(toDo)}

    );
    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    return result;
  }