import React from 'react';
import ApolloClient from 'apollo-boost';
import styled from 'styled-components';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';

import Title from './components/Title';
import Footer from './components/Footer';
import TextInput from './components/Input';
import TodoList from './components/TodoList';

const defaults = {
  todos: {
    __typename: 'Todos',
    all: [
      { __typename: 'todo', id: 0, text: 'Finish tutorial' },
      { __typename: 'todo', id: 1, text: 'Meal prep' },
      { __typename: 'todo', id: 2, text: 'Call my mother' },
      { __typename: 'todo', id: 3, text: 'Push code' }
    ]
  }
};

const client = new ApolloClient({
  clientState: {
    defaults
  }
});

const Wrapper = styled.View`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const App = () => (
  <ApolloProvider client={client}>
    <Wrapper>
      <Title />
      <ScrollView>
        <TextInput />
        <TodoList />
      </ScrollView>
      <Footer />
    </Wrapper>
  </ApolloProvider>
);

export default App;
