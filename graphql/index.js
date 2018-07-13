import { GET_TODOS } from './queries';

// for demo purposes
const newTodoId = 4;

export const defaults = {
  todos: [
    { __typename: 'Todo', id: 0, text: 'Finish tutorial' },
    { __typename: 'Todo', id: 1, text: 'Meal prep' },
    { __typename: 'Todo', id: 2, text: 'Call my mother' },
    { __typename: 'Todo', id: 3, text: 'Push code' }
  ]
};

export const resolvers = {
  Mutation: {
    addTodo: (_, { text }, { cache }) => {
      const previous = cache.readQuery({ query: GET_TODOS });

      const newTodo = { id: newTodoId++, text, __typename: 'Todo' };
      const data = { todos: previous.todos.concat([newTodo]) };

      cache.writeQuery({ query: GET_TODOS, data });
      return newTodo;
    }
  }
};
