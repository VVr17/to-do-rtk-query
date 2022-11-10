import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './App.styled';
import { Filter } from 'components/StatusFilter/StatusFilter';
import { Loader } from 'components/Loader/Loader';
import { TodoEditor } from 'components/TodoEditor/TodoEditor';
import { TodoList } from 'components/TodoList/TodoList';
import { useFetchTodosQuery } from 'redux/todoSlice';

export const App = () => {
  const { data: todos, isLoading, error } = useFetchTodosQuery();

  return (
    <Container>
      {todos && <AppBar />}
      <main>
        <TodoEditor />
        <Filter />
        <Loader isLoading={isLoading} />
        {error && <p>{error}</p>}
        {todos?.length > 0 && <TodoList />}
      </main>
    </Container>
  );
};
