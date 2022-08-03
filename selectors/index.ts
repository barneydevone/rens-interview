import { createSelector } from 'reselect';
import { ITodoState } from '../types/reducer';

export const selectState = () => (state: ITodoState) => state.todo;

export const selectTodoItem = () =>
    createSelector(
        selectState(),
        todo => todo?.item,
    );

export const selectTodoData = () =>
    createSelector(
        selectState(),
        todo => todo?.data,
    );
