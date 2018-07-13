import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { REMOVE_ALL_TODOS } from '../graphql/mutations';

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

const Footer = () => (
  <Wrapper>
    <Mutation mutation={REMOVE_ALL_TODOS}>
      {(removeAllTodos) => (
        <FooterText onPress={() => removeAllTodos()}>Remove completed items</FooterText>
      )}
    </Mutation>
  </Wrapper>
);

export default Footer;
