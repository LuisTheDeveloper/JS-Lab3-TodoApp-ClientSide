import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

// High Order Selectors - don't know how data is stored in Redux store
// Use of Memoization
export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
