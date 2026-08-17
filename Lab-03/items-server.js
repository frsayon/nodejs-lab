const http = require('http');

const items = [
  { id: 1, title: "3 Idiots", genre: "Comedy" },
  { id: 2, title: "Dangal", genre: "Drama" },
  { id: 3, title: "War", genre: "Action" },
  { id: 4, title: "Zindagi Na Milegi Dobara", genre: "Adventure" },
  { id: 5, title: "Andhadhun", genre: "Thriller" }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/items') {
    res.end(JSON.stringify(items));
  }
  else if (req.url.startsWith('/items/')) {
    const id = Number(req.url.split('/')[2]);
    const item = items.find(i => i.id === id);

    if (item) {
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Item not found" }));
    }
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3001, () => console.log("Server running at http://localhost:3001/items"));