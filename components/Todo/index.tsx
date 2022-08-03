import React from 'react';
import { ETodoType } from '../../types/reducer'
import { useDispatch, useSelector } from 'react-redux';
import { ITodo } from '../../types/todo';
import { selectTodoData, selectTodoItem } from '../../selectors';

const Todo = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectTodoItem())
  const data = useSelector(selectTodoData())

  return (
    <React.Fragment>
      <h1>TODO</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch({
            type: ETodoType.TODO_ADD,
            item: {value : item?.value}
        })
      }}>
        <input
          type="text"
          value={item?.value || ''}
          onChange={e => dispatch({
            type: ETodoType.TODO_ONCHANGE,
            item: {value : e.target.value}
        })}
        />
        <br />
        <input
          type="submit"
          value="SUBMIT"
          style={{
            display: 'none',
          }}
        />
      </form>
      <hr />
      {data?.map((item : ITodo, index : number) => (
        <p key={index}>
          {item.value}
          <button onClick={() => dispatch({
            type: ETodoType.TODO_DELETE,
            item
        })}>
            DELETE
          </button>
        </p>
      ))}
    </React.Fragment>
  );
};

export default Todo;
