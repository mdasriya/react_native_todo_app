import React, { useState } from 'react';
import { View, StyleSheet,Text, ScrollView } from 'react-native';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, eggs, bread',
      completed: false,
    },
    {
      id: 2,
      title: 'Finish homework',
      description: 'Math assignment',
      completed: false,
    },
  ]);

  const handleCreateTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, marginTop:20, marginBottom:20}}>Todo App</Text>
      <ScrollView>
        <CreateTodo onCreate={handleCreateTodo} />
        <TodoList todos={todos} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
