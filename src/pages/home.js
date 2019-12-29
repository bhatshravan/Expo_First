import React, { useState, Component } from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View, FlatList } from 'react-native';
import styles from '../styles/style';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Home = props => {
  let [selectedIndex, SCI] = useState([0, 1, 2]);
  let todos = useStoreState(state => state.todos.items);
	let user = useStoreState(state => state.users);
	const addTodo = useStoreActions(actions => actions.todos.add);
	//{() => addTodo(text)}

  const { navigation } = props;
  return (
    <View style={styles.conts}>
      <Text style={styles.white}>{user}</Text>
      <Text>{navigation.getParam('test', 'NO-ID')}</Text>
      <Text>Test</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

export default Home;
