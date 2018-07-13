import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import { CheckBox } from 'react-native-elements';

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

const todos = [
  { id: 0, text: 'Finish tutorial' },
  { id: 1, text: 'Meal prep' },
  { id: 2, text: 'Call my mother' },
  { id: 3, text: 'Push code' }
];

const extractKey = ({ id }) => id.toString();

const renderItem = ({ item }) => (
  <ItemWrapper>
    <Text>{item.text}</Text>
    <ActionWrapper>
      <CheckBox containerStyle={styles.containerStyle} />
      <RemoveIcon>X</RemoveIcon>
    </ActionWrapper>
  </ItemWrapper>
);

const TodoList = () => <FlatList data={todos} renderItem={renderItem} keyExtractor={extractKey} />;

export default TodoList;
