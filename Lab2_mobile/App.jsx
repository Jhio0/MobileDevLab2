import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './forms/ToDoList'; 
import ToDoForm from './forms/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList /> {/* Use ToDoList component here */}
      <ToDoForm /> {/* Use ToDoForm component here */}
    </SafeAreaView>
  );
}

export default App;