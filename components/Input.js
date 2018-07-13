import React, { Component, PropTypes } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styled from 'styled-components';

const TodoInput = styled.TextInput`
  font-size: 18px;
  padding: 16px;
  border: 1px solid lightgrey;
`;

export default class Input extends Component {
  render() {
    return <TodoInput placeholder="Enter a todo" />;
  }
}
