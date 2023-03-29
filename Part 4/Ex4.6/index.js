const http = require('http')
let notes = [
{
   
  author: "Robert C. Martin",
  blogs: 3
  }
]
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
  })
  
  const PORT = 3005
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)