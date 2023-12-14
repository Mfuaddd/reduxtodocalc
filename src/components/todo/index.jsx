import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../../redux/todoSlider";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const todos = useSelector((state) => state.todo.value);
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (todos.some(x=>x.text === input)) {
      return
    }
    dispatch(addTodo({ text: input, id: uuidv4() }));
    setInput("");
  }

  function handleEdit(x) {
    setIsEdit(x.id);
    setEditInput(x.text);
  }
  
  function handleEditSubmit(e, id) {
    e.preventDefault();
    setIsEdit(-1);
    dispatch(editTodo({ id: id, edit: editInput }));
  }

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <ol>
        {todos.map((x) => (
          <li key={x.id}>
            {isEdit === x.id ? (
              <form action="" onSubmit={(e) => handleEditSubmit(e, x.id)}>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <input type="submit" value="save" />
                <button onClick={() => dispatch(removeTodo(x.id))}>
                  remove
                </button>
              </form>
            ) : (
              <>
                <span>{x.text}</span>
                <button onClick={() => handleEdit(x)}>edit</button>
                <button onClick={() => dispatch(removeTodo(x.id))}>
                  remove
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
