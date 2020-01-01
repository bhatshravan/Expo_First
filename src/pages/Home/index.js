import React, { useState, useEffect } from 'react';
import { Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, FlatList } from 'react-native';
import styles from '../../styles/style';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Home = props => {
  let [selectedIndex, SCI] = useState([0, 1, 2]);
  let todos = useStoreState(state => state.todos.items);
  let user = useStoreState(state => state.users);
  const addTodo = useStoreActions(actions => actions.todos.add);
  //{() => addTodo(text)}

  useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/');
    const res = await response.json();
    console.log(res.results[0].gender);
  }, []);

  const { navigation } = props;
  return (
    <View style={styles.body}>
      <Text>{user}</Text>
      <Text>Test</Text>
    </View>
  );
};

export default Home;
