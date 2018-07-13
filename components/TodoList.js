import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { FlatList, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import AppText from './shared/AppText';
import { GET_TODOS } from '../graphql/queries';

const ItemWrapper = styled.View`
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ActionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

const RemoveIcon = styled.Text`
  color: red;
`;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    width: '50%'
  }
});

const extractKey = ({ id }) => id.toString();

const renderItem = ({ item }) => (
  <ItemWrapper>
    <AppText>{item.text}</AppText>
    <ActionWrapper>
      <CheckBox containerStyle={styles.containerStyle} />
      <RemoveIcon>X</RemoveIcon>
    </ActionWrapper>
  </ItemWrapper>
);

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos } }) => (
      <FlatList data={todos} renderItem={renderItem} keyExtractor={extractKey} />
    )}
  </Query>
);

export default TodoList;
