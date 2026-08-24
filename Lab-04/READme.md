# Lab 04 – Advanced Search, Filter & Sort API

## Objective

This lab implements an Advanced Search, Filter and Sort API using Node.js built-in `http` and `url` modules.

The API supports multiple query parameters, case-insensitive partial search, sorting, input validation, and route parameters.

## File

The main server file for this lab is:

`advanced-server.js`

## Query Parameters

### 1. course

Filters students according to their course.

Example:

`http://localhost:3000/students?course=BCA`

This returns only students whose course is BCA.

### 2. minMarks

Returns students whose marks are greater than or equal to the given minimum marks.

Example:

`http://localhost:3000/students?minMarks=60`

This returns students who have scored 60 or above.

### 3. search

Searches student names using partial and case-insensitive matching.

Example:

`http://localhost:3000/students?search=a`

This returns students whose names contain the letter "a".

The API was tested using the following requests:

1. `/students`
2. `/students?course=BCA`
3. `/students?minMarks=60`
4. `/students?search=a`


## Output

Screenshots of the API testing are saved in:

`advanced-output.png`