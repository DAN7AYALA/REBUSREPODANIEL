import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const url = ''
  //https://github.com/audioBoom/api'
  //https://api.audioboom.com/oauth/'
  //859e8ca72f8421979c32674040152533c1bb5d294a55aa0ea2f67dc2bbe5ad61 '
  //const url = 'https://api.audioboom.com/oauth/token.c536ebc979f5b7ea7cdefe785cdc6c08996316f27430abefa38909932141ff48'

  const [todos, setTodos] = useState()

  const fetchApi = async () => {
    console.log(todos)
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      Hola Mundo
      <ul>
        {!todos ? 'Cargando...' :
          todos.map((todo, index) => {
            return <li key={todo.id}>{todo.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
