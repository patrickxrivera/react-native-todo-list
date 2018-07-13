import React from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import { FlatList, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

import AppText from './shared/AppText';
import { GET_TODOS } from '../graphql/queries';
import { REMOVE_TODO, TOGGLE_IS_COMPLETED } from '../graphql/mutations';

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
      <Mutation mutation={TOGGLE_IS_COMPLETED} variables={{ id: item.id }}>
        {(toggleIsCompleted) => (
          <CheckBox
            containerStyle={styles.containerStyle}
            checked={item.isCompleted}
            onPress={() => toggleIsCompleted()}
          />
        )}
      </Mutation>

      <Mutation mutation={REMOVE_TODO} variables={{ id: item.id }}>
        {(removeTodo) => <RemoveIcon onPress={() => removeTodo()}>X</RemoveIcon>}
      </Mutation>
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
