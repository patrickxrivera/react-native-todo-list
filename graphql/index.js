import { GET_TODOS } from './queries';

// for demo purposes
const newTodoId = 0;

export const defaults = {
  todos: []
};

export const resolvers = {
  Mutation: {
    addTodo: (_, { text }, { cache }) => {
      const previous = cache.readQuery({ query: GET_TODOS });

      const newTodo = {
        id: newTodoId++,
        isCompleted: false,
        __typename: 'Todo',
        text
      };

      const updatedTodos = { todos: previous.todos.concat([newTodo]) };

      cache.writeData({ data: updatedTodos });

      return newTodo;
    },
    removeTodo: (_, { id }, { cache }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });

      const updatedTodos = todos.filter((todo) => todo.id !== id);

      cache.writeData({
        data: {
          todos: updatedTodos
        }
      });

      return { success: true };
    },
    removeAllTodos: (_, __, { cache }) => {
      cache.writeData({ data: { todos: [] } });

      return { success: true };
    },
    toggleIsCompleted: (_, { id }, { cache }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });

      const updatedTodos = todos.map(
        (todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
      );

      cache.writeData({ data: { todos: updatedTodos } });

      return { success: true };
    }
  }
};
