import gql from 'graphql-tag';

export const GET_TODOS = gql`
  {
    todos @client {
      id
      text
    }
  }
`;
