const http = require('http')
let notes = [
{
   
    author: "Edsger W. Dijkstra",
    likes: 17
  }
]
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
  })
  
  const PORT = 3006
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)