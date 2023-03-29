import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <div className="App">
      <h1> Phonebook </h1>
      <div className="c1"> Added Juha Tauriainen </div>
    </div>
  );
}

export default App;
