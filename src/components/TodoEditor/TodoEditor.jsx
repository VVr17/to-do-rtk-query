// import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { useAddTodoMutation } from 'redux/todoSlice';
import { Text, Form, Title } from './TodoEditor.styled';
// import { addTodo } from 'redux/operations';

export const TodoEditor = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    addTodo(form.text.value);
    form.reset();
  };

  return (
    <>
      <Title>Add new task</Title>
      <Form onSubmit={handleSubmit}>
        <Text
          type="text"
          name="text"
          placeholder="please, enter text..."
        ></Text>
        <Loader isLoading={isLoading} />
        <Button type="submit" disabled={isLoading}>
          Add task
        </Button>
      </Form>
    </>
  );
};
