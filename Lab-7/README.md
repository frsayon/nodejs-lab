# Node.js Lab Assignment - 07

## Student Information

- Name: Sayon
- Scholar Number: 23145021
- Course: CS403NOD - Node.js
- Semester: BCA VII
- College: Dev Sanskriti Vishwavidyalaya (DSVV)

## Lab Number

07

## Date

07 October 2026

## Topic

EventEmitter and Event-Driven Programming

## Objective

The objective of this lab is to understand EventEmitter and event-driven programming in Node.js. The lab demonstrates custom events, multiple listeners, one-time events using once(), error handling, extending EventEmitter using classes, and a real-time order tracking system.

## Files and Their Purpose

### events-basic.js

Demonstrates how to create a custom event using EventEmitter and how event listeners respond to emitted events.

### order-system.js

Demonstrates multiple independent listeners responding to the same order event.

### once-vs-on.js

Demonstrates the difference between once() and on() event listeners.

### error-handling.js

Demonstrates how Node.js handles the error event and how an error listener prevents the process from crashing.

### notification-center.js

Demonstrates how a custom NotificationCenter class can extend EventEmitter and handle multiple custom events.

### order-tracker.js

Implements a real-time order tracking system using EventEmitter with placed, prepared, delivered, firstOrderBonus, and error events.

### reflection-notes.txt

Contains reflections about EventEmitter, the Observer Pattern, and another Node.js API based on event-driven programming.

### order-tracker-output.png

Contains the screenshot of the complete console output of the real-time order tracking system.

## One-Line Summary

These JavaScript files demonstrate custom events, multiple listeners, one-time events, error handling, EventEmitter inheritance, and a real-time event-driven order tracking system in Node.js.

## Conclusion

This lab helped in understanding how Node.js uses EventEmitter for event-driven programming. It demonstrated how events can be created, emitted, listened to, handled once, and managed safely using error listeners.