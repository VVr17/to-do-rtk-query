import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { todoApi } from './todoSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    todoApi.middleware,
  ],
});
