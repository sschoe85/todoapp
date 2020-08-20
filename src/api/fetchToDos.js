export async function fetchToDos() {
    const response = await fetch(
      "http://localhost:3333/todos"

    );
    if (!response.ok) {
      throw new Error(response);
    }
    const todos = await response.json();
    
    return todos;
  }