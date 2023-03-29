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
      The result will be printed in console.log(), check the console
    </div>
  );
}

export default App;
