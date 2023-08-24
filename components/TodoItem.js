// TodoItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ todo }) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Text>{todo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  todoTitle: {
    fontWeight: 'bold',
  },
});

export default TodoItem;
