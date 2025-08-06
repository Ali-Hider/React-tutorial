import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todoslice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = React.useState("");        // Stores the ID of the todo being edited
  const [editText, setEditText] = React.useState("");    // Stores the text being edited

  return (
    <>
      <div className="text-white text-lg font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-red-300 rounded px-2 py-1 w-full mr-2"
              />
            ) : (
              <div className="text-white w-full mr-2">{todo.text}</div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (editId === todo.id) {
                    // Save edit
                    dispatch(updateTodo({ id: todo.id, text: editText }));
                    setEditId("");
                    setEditText("");
                  } else {
                    // Start editing
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }
                }}
                className="text-white bg-blue-500 border-0 px-3 py-1 rounded hover:bg-blue-600"
              >
                {editId === todo.id ? "📁" : "✏️"}
              </button>

              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                  if (editId === todo.id) {
                    setEditId("");
                    setEditText("");
                  }
                }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
