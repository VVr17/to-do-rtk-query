import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://636a77a5c07d8f936d9ee251.mockapi.io',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => `/tasks`,
      providesTags: ['Todo'],
    }),

    addTodo: builder.mutation({
      query: text => ({
        url: `/tasks`,
        method: 'POST',
        body: { text, completed: false },
      }),
      invalidatesTags: ['Todo'],
    }),

    deleteTodo: builder.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),

    toggleCompletedTodo: builder.mutation({
      query: todo => ({
        url: `/tasks/${todo.id}`,
        method: 'PUT',
        body: { ...todo, completed: !todo.completed },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleCompletedTodoMutation,
} = todoApi;

// { id: 0, text: 'Learn HTML and CSS', completed: true },
// { id: 1, text: 'Get good at JavaScript', completed: true },
// { id: 2, text: 'Master React', completed: false },
// { id: 3, text: 'Discover Redux', completed: false },
// { id: 4, text: 'Build amazing apps', completed: false },
