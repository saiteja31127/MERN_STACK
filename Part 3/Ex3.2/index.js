const http = require('http')
const express = require('express')
const app = express()
let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
     
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523",
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345",
    },
    {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-6423122",
    }
  ]

 
  

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/info', (request, response) => {
    response.send('Phonebbok has info for 4 people')
    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    print(today.toLocaleDateString("en-US", options)); 
    print(hours + ":" + minutes + ":" + seconds);
    
    
  })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
s