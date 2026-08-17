const http = require('http');

const students = [
  { id: 1, name: "sayon", course: "BCA" },
  { id: 2, name: "bhaskar", course: "BCA" },
  { id: 3, name: "sudhanshu", course: "BCA" },
  { id: 4, name: "Rishabh", course: "BCA" },
  { id: 5, name: "ayush", course: "BCA" },
  { id: 6, name: "yadev", course: "BCA" },
  { id: 7, name: "aditya", course: "BCA" },
  { id: 8, name: "pragya", course: "BCA" },
  { id: 9, name: "gauri", course: "BCA" },
  { id: 10, name: "kanak", course: "BCA" },
  { id: 11, name: "shreya singh", course: "BCA" },
  { id: 12, name: "shreya kashyap", course: "BCA" },
  { id: 13, name: "mikki", course: "BCA" },
  { id: 14, name: "nisha", course: "BCA" }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/students') {
    res.end(JSON.stringify(students));
  }
  // Bonus: /students/course/BCA  -> ye check pehle karna zaroori hai
  // kyunki ye bhi '/students/' se start hota hai
  else if (req.url.startsWith('/students/course/')) {
    const course = req.url.split('/')[3];
    const filtered = students.filter(s => s.course.toUpperCase() === course.toUpperCase());
    res.end(JSON.stringify(filtered));
  }
  else if (req.url.startsWith('/students/')) {
    const rawId = req.url.split('/')[2];
    const id = Number(rawId);

    // Bonus: non-numeric id handle karna
    if (isNaN(id)) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Invalid id. Please provide a numeric id." }));
      return;
    }

    const student = students.find(s => s.id === id);
    if (student) {
      res.end(JSON.stringify(student));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Student not found" }));
    }
  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(3000, () => console.log("Server running at http://localhost:3000/students"));