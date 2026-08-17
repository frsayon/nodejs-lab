## Lab 03 - Student Directory API

### New Routes
- `GET /students` — returns the full list of students
- `GET /students/:id` — returns one student by id, or "Student not found" if id doesn't exist
- `GET /students/course/:course` — returns all students belonging to that course (e.g. `/students/course/BCA`)
- `GET /students/abc` (non-numeric id) — returns a clear "Invalid id" error instead of a confusing result
- `GET /items` — returns the full list of items
- `GET /items/:id` — returns one item by id, or "Item not found"

### Note on req.url.split()
`req.url.split('/')` breaks the URL string into an array using `/` as the separator.
This lets us pick out specific parts of the URL — like the id or course name — 
using their position in that array (e.g. `req.url.split('/')[2]` gives the id).


## Problems Faced

Task No.: Task 2

Issue:
Students array me sabhi objects ka id same (3) tha aur comma missing tha, isliye server crash ho raha tha.

Attempted Solution:
Har student ko unique id diya (1 se 14 tak) aur missing commas fix kiye. Isके baad server sahi se chalne laga.