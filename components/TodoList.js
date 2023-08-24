// TodoList.js
import React from 'react';
import { View } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <View>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
};

export default TodoList;
