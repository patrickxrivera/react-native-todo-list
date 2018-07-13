import React, { Component, PropTypes } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styled from 'styled-components';

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

  render() {
    console.log('hello');
    return (
      <TodoInput
        onChangeText={this.handleChangeText}
        value={this.state.text}
        placeholder="Enter a todo"
      />
    );
  }
}
