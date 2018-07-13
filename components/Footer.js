import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  height: 70px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.Text`
  font-size: 20px;
  color: red;
`;

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FooterText>Remove completed items</FooterText>
      </Wrapper>
    );
  }
}
