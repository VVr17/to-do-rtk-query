import { ToDo } from 'components/TodoList/Todo/Todo';
import { useSelector } from 'react-redux';
import { statusFilter } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { useFetchTodosQuery } from 'redux/todoSlice';
import { Title, TodoListStyled } from './TodoList.styled';

export const TodoList = () => {
  const { data: todos } = useFetchTodosQuery();
  const filterStatus = useSelector(selectStatusFilter);
  const visibleTodos = getVisibleTodos(todos, filterStatus);

  return (
    <>
      <Title> TODO list </Title>
      <TodoListStyled>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            <ToDo todo={todo} />
          </li>
        ))}
      </TodoListStyled>
    </>
  );
};

function getVisibleTodos(tasks, filterStatus) {
  switch (filterStatus) {
    case statusFilter.active:
      return tasks.filter(task => !task.completed);
    case statusFilter.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
}
