const http = require('http');
const url = require('url');

const students = [
    { id: 1, name: "Aman", course: "BCA", marks: 72 },
    { id: 2, name: "Sanya", course: "BCA", marks: 85 },
    { id: 3, name: "Chandan", course: "BCA", marks: 58 },
    { id: 4, name: "Rishabh", course: "BBA", marks: 91 },
    { id: 5, name: "Bhaskar", course: "BCA", marks: 65 },
    { id: 6, name: "Aditya", course: "BBA", marks: 76 },
    { id: 7, name: "Sayon", course: "BCA", marks: 88 },
    { id: 8, name: "Rahul", course: "BBA", marks: 49 }
];

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Main /students route
    if (pathName === '/students') {

        // Copy students array so original array is not changed by sorting
        let result = [...students];

        // Course filter
        if (query.course) {
            result = result.filter(student =>
                student.course.toLowerCase() === query.course.toLowerCase()
            );
        }

        // Minimum marks filter
        if (query.minMarks !== undefined) {

            const minMarks = Number(query.minMarks);

            if (isNaN(minMarks)) {
                res.statusCode = 400;

                return res.end(JSON.stringify({
                    error: "minMarks must be a number"
                }));
            }

            result = result.filter(student =>
                student.marks >= minMarks
            );
        }

        // Search by name
        if (query.search) {

            const searchText = query.search.toLowerCase();

            result = result.filter(student =>
                student.name.toLowerCase().includes(searchText)
            );
        }

        // Sorting
        if (query.sort) {

            if (query.sort !== "name" && query.sort !== "marks") {

                res.statusCode = 400;

                return res.end(JSON.stringify({
                    error: "sort must be either name or marks"
                }));
            }

            const order = query.order || "asc";

            result.sort((a, b) => {

                if (query.sort === "marks") {
                    return order === "desc"
                        ? b.marks - a.marks
                        : a.marks - b.marks;
                }

                return order === "desc"
                    ? b.name.localeCompare(a.name)
                    : a.name.localeCompare(b.name);
            });
        }

        res.end(JSON.stringify(result, null, 2));

    }

    // Course route: /students/course/BCA
    else if (pathName.startsWith('/students/course/')) {

        const courseName = pathName.split('/')[3];

        let result = students.filter(student =>
            student.course.toLowerCase() === courseName.toLowerCase()
        );

        // Minimum marks filter
        if (query.minMarks !== undefined) {

            const minMarks = Number(query.minMarks);

            if (isNaN(minMarks)) {

                res.statusCode = 400;

                return res.end(JSON.stringify({
                    error: "minMarks must be a number"
                }));
            }

            result = result.filter(student =>
                student.marks >= minMarks
            );
        }

        // Search filter
        if (query.search) {

            const searchText = query.search.toLowerCase();

            result = result.filter(student =>
                student.name.toLowerCase().includes(searchText)
            );
        }

        // Sorting
        if (query.sort) {

            if (query.sort !== "name" && query.sort !== "marks") {

                res.statusCode = 400;

                return res.end(JSON.stringify({
                    error: "sort must be either name or marks"
                }));
            }

            const order = query.order || "asc";

            result.sort((a, b) => {

                if (query.sort === "marks") {
                    return order === "desc"
                        ? b.marks - a.marks
                        : a.marks - b.marks;
                }

                return order === "desc"
                    ? b.name.localeCompare(a.name)
                    : a.name.localeCompare(b.name);
            });
        }

        res.end(JSON.stringify(result, null, 2));

    }

    // Invalid route
    else {

        res.statusCode = 404;

        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});