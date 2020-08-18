export async function fetchToDos() {
    const response = await fetch(
      "http://localhost:3333/todos"

    );
    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    const todos = result.map((todo) => ({
      id: todo.id,
      title: todo.title,
      details: todo.remarks,
      
    }));
    return todos;
  }