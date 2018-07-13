import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';

const TitleWrapper = styled.View`
  height: 80px;
  width: 100%;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 20px;
  margin-top: 30px;
`;

export default class Title extends Component {
  render() {
    return (
      <TitleWrapper>
        <TitleText>Todo List</TitleText>
      </TitleWrapper>
    );
  }
}
