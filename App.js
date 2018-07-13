import React from 'react';
import ApolloClient from 'apollo-boost';
import styled from 'styled-components';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { defaults, resolvers } from './graphql';
import { ApolloProvider } from 'react-apollo';

import Title from './components/Title';
import Footer from './components/Footer';
import TextInput from './components/Input';
import TodoList from './components/TodoList';

const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers
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
