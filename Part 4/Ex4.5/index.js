const http = require('http')
let notes = [
{
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  }
]
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
  })
  
  const PORT = 3004
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)