import React, { Component, PropTypes } from 'react';
import { Mutation } from 'react-apollo';
import { TextInput, View, StyleSheet } from 'react-native';
import styled from 'styled-components';

import { ADD_TODO } from '../graphql/mutations';

const TodoInput = styled.TextInput`
  font-size: 18px;
  padding: 16px;
  border: 1px solid lightgrey;
`;

export default class Input extends Component {
  state = {
    text: ''
  };

  handleChangeText = (text) => {
    this.setState({ text });
  };

  handleSubmit = (addTodo) => () => {
    addTodo();

    this.setState({ text: '' });
  };

  render() {
    return (
      <Mutation mutation={ADD_TODO} variables={{ text: this.state.text }}>
        {(addTodo) => (
          <TodoInput
            onChangeText={this.handleChangeText}
            value={this.state.text}
            placeholder="Enter a todo"
            onSubmitEditing={this.handleSubmit(addTodo)}
            autoFocus
          />
        )}
      </Mutation>
    );
  }
}
