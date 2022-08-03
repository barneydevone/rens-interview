
import { ITodo } from './todo'
export enum ETodoType {
    TODO_ONCHANGE = "TODO_ONCHANGE",
    TODO_ADD = "TODO_ADD",
    TODO_DELETE = "TODO_DELETE"
}

export interface ITodoState {
    todo: { item: ITodo, data: ITodo[] }
}

export interface IAction {
    type: ETodoType,
    item: ITodo
}