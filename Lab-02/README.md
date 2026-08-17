# Node.js Lab Assignment

**Name:** sayon  
**Scholar Number:** 23145021 
**Course:** CS403NOD - Node.js  
**Semester:** BCA VII  
**College:** Dsvv  

---

## Lab Number: 02
**Date:** 09-08-2026

---

## About the Project

This project demonstrates how to build a basic HTTP server in Node.js 
using the core `http` module, without using any external frameworks like 
Express. The server handles multiple routes, sends both plain text and 
JSON responses, and reads its port from an environment variable.

---

## How to Run

```bash
node server.js
```

Server will start at:
You can also set a custom port using an environment variable:
```bash
PORT=4000 node server.js
```

---

## Routes

| Route       | Method | Returns                                                        |
|-------------|--------|-----------------------------------------------------------------|
| `/`         | GET    | Plain text welcome message with Name, Scholar Number, and Course |
| `/about`    | GET    | Plain text message about myself                                 |
| `/college`  | GET    | Plain text message with college name and semester                |
| `/profile`  | GET    | JSON object with `name`, `scholarNumber`, `course`, `semester`, and `college` |
| Any other route | GET | 404 status code with "Page Not Found" message                |

---

## Screenshots

- `server-running.png` – Shows the server running and the home route (`/`) output in the browser.
- `routes-output.png` – Shows the output of all three routes (`/`, `/about`, `/college`) in the browser.

---

## Project Structure
---

## Problems Faced

**Task No.:** Setup / Environment  
**Issue:** `npm init -y` failed with the error "running scripts is disabled on this system" because PowerShell's execution policy was set to `Restricted`.  
**Attempted Solution:** Ran `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` to allow locally created scripts to run, which resolved the issue.

**Task No.:** Task 3 (Running the server)  
**Issue:** `node server.js` was exiting immediately without starting the server or showing any console output, even though the code had no syntax errors.  
**Attempted Solution:** Found that the `server.js` file had been saved in UTF-16 encoding instead of UTF-8, which Node.js could not parse correctly. Re-saved the file using Notepad with UTF-8 encoding, which fixed the issue and the server started running correctly.

---

## Lab 01 Summary
*(Update this section with whatever you had in your Lab 01 README)*

- Brief description of what was done in Lab 01
- Any setup steps or routes from Lab 01