import gql from 'graphql-tag';

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) @client
  }
`;

export const REMOVE_TODO = gql`
  mutation RemoveTodo($id: Integer!) {
    removeTodo(id: $id) @client
  }
`;

export const TOGGLE_IS_COMPLETED = gql`
  mutation ToggleIsCompleted($id: Integer!) {
    toggleIsCompleted(id: $id) @client
  }
`;

export const REMOVE_ALL_TODOS = gql`
  mutation RemoveAllTodos {
    removeAllTodos @client
  }
`;
