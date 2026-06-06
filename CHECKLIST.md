# JavaScript Proficiency Checklist

## The Basics
- [ ] Variables (let, const, var) — know when to use each
- [ ] Data types — string, number, boolean, null, undefined, object
- [ ] Functions — declaration, expression, arrow functions
- [ ] Scope — block scope vs function scope
- [ ] Template literals — backtick strings with ${} interpolation
- [ ] Conditionals — if/else, ternary, switch
- [ ] Loops — for, while, for...of, for...in

## Objects & Classes
- [ ] Object literals — properties, methods, shorthand syntax
- [ ] this keyword — how context changes depending on how a function is called
- [ ] Classes — constructor, methods, class fields
- [ ] Getters & setters — control how properties are read and written
- [ ] Inheritance (extends) — child classes that build on a parent class
- [ ] super keyword — call the parent constructor and methods
- [ ] Static methods — methods on the class itself, not instances
- [ ] Private fields (#) — properties only accessible inside the class
- [ ] Prototype chain — how JS looks up methods on objects

## Arrays
- [ ] Array basics — push, pop, shift, unshift, splice, slice
- [ ] map() — transform every item into something new
- [ ] filter() — keep only items that pass a condition
- [ ] reduce() — collapse an array into a single value
- [ ] find() & findIndex() — get the first item matching a condition
- [ ] forEach() — loop over every item
- [ ] Spread operator (...) — copy or merge arrays
- [ ] Destructuring — pull values out of arrays cleanly

## Functions (Deeper)
- [ ] Callbacks — passing functions as arguments
- [ ] Closures — functions that remember their outer scope
- [ ] Default parameters — fallback values when arguments aren't passed
- [ ] Rest parameters (...args) — accept any number of arguments
- [ ] Higher order functions — functions that take or return other functions
- [ ] .bind(), .call(), .apply() — manually control what this refers to

## Async JavaScript
- [ ] setTimeout & setInterval — delay and repeat execution
- [ ] Callbacks (async) — the original async pattern
- [ ] Promises — then(), catch(), finally()
- [ ] Promise.all() — run multiple promises at once
- [ ] async/await — write async code that reads like sync code
- [ ] try/catch — handle errors in async functions
- [ ] fetch API — load data from an external source
- [ ] Error handling patterns — gracefully handle failures

## The DOM & Events
- [ ] Selecting elements — getElementById, querySelector
- [ ] Manipulating elements — innerHTML, textContent, style, classList
- [ ] Event listeners — click, keydown, keyup, mousemove
- [ ] Event object — e.key, e.target, e.preventDefault()
- [ ] Creating & removing elements — createElement, appendChild, remove
- [ ] Event delegation — one listener handling many elements

## Modules
- [ ] export & import — split code across multiple files
- [ ] Default vs named exports — two ways to export from a file
- [ ] Module scope — variables don't leak between files

## Browser APIs (Game Relevant)
- [ ] Canvas API — drawing shapes, images, text
- [ ] requestAnimationFrame — the game loop
- [ ] localStorage — persist data between sessions
- [ ] Web Audio API — sound effects and music
- [ ] Pointer Lock API — lock the mouse cursor for game controls

## Patterns & Pro Level
- [ ] Game loop pattern — update → draw → repeat
- [ ] Collision detection — AABB, axis-aligned bounding box
- [ ] State machine — managing game states (menu, playing, dead)
- [ ] Entity component system — a scalable way to organize game objects
- [ ] Object pooling — reuse objects instead of creating new ones
- [ ] Spatial hashing — efficient collision detection for many objects
- [ ] Observer pattern — event-driven architecture
- [ ] Singleton pattern — one global instance of a class
- [ ] Dependency injection — passing dependencies rather than hardcoding them

## Tooling (When You're Ready)
- [ ] npm basics — installing and managing packages
- [ ] Vite or Parcel — bundle your files for the browser
- [ ] ESLint — catch errors and enforce style automatically
- [ ] Git & GitHub — version control and sharing your project
- [ ] TypeScript basics — add types to JavaScript
