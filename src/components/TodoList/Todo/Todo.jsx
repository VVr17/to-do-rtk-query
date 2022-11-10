import { Button } from 'components/Button/Button';
import {
  useDeleteTodoMutation,
  useToggleCompletedTodoMutation,
} from 'redux/todoSlice';
import { TextWrapper, UpdateNotification } from './Todo.styled';

export const ToDo = ({ todo }) => {
  const { text, completed } = todo;
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [toggleCompleted, { isLoading: isUpdating }] =
    useToggleCompletedTodoMutation();

  return (
    <>
      <TextWrapper completed={completed}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(todo)}
        />
        <p>{text}</p>
      </TextWrapper>
      {isUpdating && <UpdateNotification>Updating...</UpdateNotification>}
      <Button onClick={() => deleteTodo(todo.id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </>
  );
};
