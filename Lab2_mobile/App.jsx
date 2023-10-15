import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './forms/ToDoList'; 
import ToDoForm from './forms/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/> {/* Use ToDoList component here */}
      <ToDoForm /> {/* Use ToDoForm component here */}
    </SafeAreaView>
  );
}

export default App;