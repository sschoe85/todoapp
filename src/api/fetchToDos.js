export async function fetchToDos() {
    const response = await fetch(
      "http://localhost:6000/todos.json"

    );
    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    const todos = result.map((todo) => ({
      id: result.id,
      title: result.title,
      details: result.remarks,
      
    }));
    return todos;
  }