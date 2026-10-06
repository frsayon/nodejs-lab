# Node.js Lab Assignment

## Student Details

- **Name:** Sayon Koley
- **Scholar Number:** 23145021
- **Course:** CS403NOD - Node.js
- **Semester:** BCA VII
- **College:** Dev Sanskriti Vishwavidyalaya (DSVV)

---

# Lab Number: 05

## Title

**Simulating a Food Delivery Tracker — Callbacks, Promises & Async/Await**

## Objective

The objective of this lab is to implement asynchronous JavaScript logic using callbacks, Promises, async/await, Promise chaining, and Promise.all(). The lab also demonstrates Promise states, error handling, concurrent operations, and the connection between asynchronous JavaScript and the Event Loop.

---

# Files and Their Purpose

### 1. callback-version.js
Demonstrates asynchronous order processing using nested callbacks.

### 2. promise-version.js
Demonstrates how Promises can handle successful and failed asynchronous operations using `.then()` and `.catch()`.

### 3. chaining-version.js
Demonstrates sequential asynchronous operations using Promise chaining with a single `.catch()` for error handling.

### 4. async-await-version.js
Demonstrates the same order lifecycle using async/await with try/catch for error handling.

### 5. concurrent-orders.js
Demonstrates running multiple orders concurrently using `Promise.all()`.

---

# Lab Workflow

```text
Place Order
     ↓
Track Order
     ↓
Confirm Delivery
     ↓
Delivered