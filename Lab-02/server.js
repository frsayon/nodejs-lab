const http = require('http');

// ---- Your Details (edit these) ----
const NAME = "Sayon";
const SCHOLAR_NUMBER = "23145021";
const COURSE = "CS403NOD - Node.js";
const SEMESTER = "BCA VII";
const COLLEGE = "Dsvv";
// ------------------------------------

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(
            `Welcome!\n` +
            `Name: ${NAME}\n` +
            `Scholar Number: ${SCHOLAR_NUMBER}\n` +
            `Course: ${COURSE}`
        );
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(
            `About Me:\n` +
            `Hi, I am ${NAME}. I am currently studying in ${SEMESTER}, ` +
            `learning Node.js and backend development as part of ${COURSE}.`
        );
    }
    else if (req.url === '/college' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(
            `College: ${COLLEGE}\n` +
            `Semester: ${SEMESTER}`
        );
    }
    else if (req.url === '/profile' && req.method === 'GET') {
        const profile = {
            name: NAME,
            scholarNumber: SCHOLAR_NUMBER,
            course: COURSE,
            semester: SEMESTER,
            college: COLLEGE
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(profile));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});