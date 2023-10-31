import { ACTIONS, Action } from "./TodoInput";

interface TodoItem {
  id: number;
  name: string;
  complete: boolean;
}

interface TodoProps {
  todo: TodoItem;
  dispatch: React.Dispatch<Action>;
}

const Todo = ({ todo, dispatch }: TodoProps) => {
  return (
    <>
      <div style={{ color: todo.complete ? "black" : "red" }}>{todo.name}</div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
