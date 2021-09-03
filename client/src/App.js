import './App.css';
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

import {useState, useEffect} from 'react'

import {useQuery} from '@apollo/client';

import {GET_ALL_TODOS, GET_TODO} from "./utils/queries"

function App() {

  const {data, loading} = useQuery(GET_ALL_TODOS)

  return (
    <div className="App">
      <Header />
      <ToDoForm />
      {loading ? null : <ToDoList todos={data.todos} />}
    </div>
  );
}

export default App;
