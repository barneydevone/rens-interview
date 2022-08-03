import { ETodoType } from "../types/reducer";
import { ITodo } from "../types/todo";

export const onChangeTodo = (item : ITodo) => ({ type: ETodoType.TODO_ONCHANGE, item });

export const addTodo = (item : ITodo) => ({ type: ETodoType.TODO_ADD, item });

export const deleteTodo = (item : ITodo) => ({ type: ETodoType.TODO_DELETE, item });
