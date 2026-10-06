# Node.js Lab Assignment - Lab 06

## Working With The File System (fs) Module

### Student Details

- **Name:** Sayon Koley
- **Scholar Number:** 23145021
- **Course:** CS403NOD - Node.js
- **Semester:** BCA VII
- **College:** Dev Sanskriti Vishwavidyalaya (DSVV)

---

## Lab Number

**06**

## Date

**06 October 2026**

---

## Objective

The objective of this lab is to understand how Node.js works with the file system using the built-in `fs` module. The lab demonstrates asynchronous and synchronous file reading, writing, appending, deleting files, and using async/await with `fs.promises`. It also introduces a simple command-line Notes App that stores notes using a text file.

---

## Files and Their Purpose

### 1. sample.txt
Contains sample text that is used for file reading and copying operations.

### 2. read-async.js
Demonstrates asynchronous file reading using `fs.readFile()` and observes the order of program execution.

### 3. read-sync.js
Demonstrates synchronous file reading using `fs.readFileSync()` and shows how it blocks execution until the file is completely read.

### 4. write-file.js
Demonstrates writing data to a file using `fs.writeFile()` and observes how existing content is overwritten.

### 5. append-file.js
Demonstrates adding new content to an existing file using `fs.appendFile()` without replacing previous content.

### 6. delete-file.js
Demonstrates deleting a file using `fs.unlink()` and observes the error generated when attempting to delete a file that no longer exists.

### 7. async-await-version.js
Demonstrates reading and writing files using `fs.promises`, async/await, and try/catch error handling.

### 8. add-note.js
Adds a timestamped note to `notes.txt` using a command-line argument and `fs.appendFile()`.

### 9. read-notes.js
Reads and displays all saved notes from `notes.txt`.

---

## Concepts Covered

- Node.js File System Module
- Asynchronous File Reading
- Synchronous File Reading
- File Writing
- File Overwriting
- File Appending
- File Deletion
- Error Handling
- fs.promises
- Async/Await
- Command-Line Arguments
- File-Based Data Storage

---

## How To Run

Open the terminal inside the `Lab-06` folder.

### Read File Asynchronously

```bash
node read-async.js