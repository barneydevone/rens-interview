/* eslint-disable import/no-anonymous-default-export */
import { IAction, ETodoType } from '../types/reducer';
import { ITodo } from '../types/todo';

export const initialState = {
    item: {
        value: '',
    },
    data: [],
};

export default (state = initialState, action : IAction) => {
    console.log(state, action)
    const {
        type,
        item,
    } = action;

    switch (type) {
        case ETodoType.TODO_ONCHANGE: {
            return Object.assign({}, state, {
                item,
            });
        }

        case ETodoType.TODO_ADD: {
            if (item.value === '') {
                return state;
            }

            return Object.assign({}, state, {
                item: {
                    value: '',
                },
                data: [
                    ...(state.data),
                    item,
                ],
            });
        }

        case ETodoType.TODO_DELETE: {
            const { data, ...restState } = state;
            const updated = [...data].filter((_item : ITodo) => _item.value !== item.value);
            return Object.assign({}, restState, {
                data: updated,
            });
        }

        default: {
            return state;
        }
    }
};
