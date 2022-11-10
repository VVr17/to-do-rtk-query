import React from 'react';
import { useFetchTodosQuery } from 'redux/todoSlice';

export const TodoCounter = () => {
  const { data: todos } = useFetchTodosQuery();
  const completed = countCompletedTodos(todos);
  const active = todos.length - completed;

  return (
    <div>
      <p>Total: {todos.length}</p>
      <p>Active:{active} </p>
      <p>Completed: {completed} </p>
    </div>
  );
};

function countCompletedTodos(todos) {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
}
