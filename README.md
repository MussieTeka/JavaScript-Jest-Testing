# JavaScript Jest Testing

This repository contains code and exercises related to JavaScript testing with Jest. It covers the basics of unit testing, including the AAA pattern, TDD, and more advanced topics like mocking.

## Learning Objectives

- Write unit tests for a JavaScript app
- Use the AAA pattern for unit tests
- Explain why testing code is important

## Exercise

In this exercise, you will write practical tests for JavaScript functions using the Jest library. You should follow the AAA pattern to make your tests easier to read and understand. You will also use the TDD approach in practice.

### Task 1

Write a function `stringLength(string)` that takes any string as an argument and returns its character count. Add tests for the function and expand it to check if the string is at least 1 character long and not longer than 10 characters. Throw errors if those conditions are not met. Add tests for the new functionality.

### Task 2

Write a function `reverseString(string)` that takes a string as an argument and returns it reversed. Add at least one test for this function.

### Task 3

Write a simple calculator class or object that has four methods: `add`, `subtract`, `divide`, and `multiply`. Write at least three tests for each of the calculator methods and group tests for each method using the `describe()` method.

### Task 4

Write a test for a `capitalize(string)` function that takes a string as an argument and returns that string with the first character capitalized. Make your tests green by implementing the function.

## Getting Started

To get started, clone this repository to your local machine and run `npm install` to install the necessary dependencies. Then, you can run `npm test` to run the test suite.

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Testing JavaScript with Jest](https://www.udemy.com/course/testing-javascript/)
