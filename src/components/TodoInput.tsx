import { useReducer, useState } from "react";
import Todo from "./Todo";

// Define a type for a single todo item
interface TodoItem {
  id: number;
  name: string;
  complete: boolean;
}

// Define a type for the action object
export interface Action {
  type: string;
  payload: {
    todoName?: string;
    id?: number;
  };
}

// Define the state type as an array of todo items
type State = TodoItem[];

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.todoName)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo: TodoItem) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return state.filter((todo: TodoItem) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(name: string) {
  return { id: Date.now(), name, complete: false };
}

const TodoInput = () => {
  // useReducer fxn takes 2 args: reducer fxn and initial state
  const [todos, dispatch] = useReducer(reducer, []);
  const [todoName, setTodoName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todoName: todoName } });
    setTodoName("");
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
};

export default TodoInput;
