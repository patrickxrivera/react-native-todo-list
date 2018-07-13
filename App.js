import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Title from './components/Title';
import Footer from './components/Footer';
import TextInput from './components/Input';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.View`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const App = () => (
  <Wrapper>
    <Title />
    <ScrollView>
      <TextInput />
      <TodoList />
    </ScrollView>
    <Footer />
  </Wrapper>
);

export default App;
