<div align="center">
  <img src="mussie.png" alt="Logo" width="300">
</div>

# JavaScript Jest Testing

## 📝 Description
- [Objectives](#objectives)
- [Exercise](#exercise)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

This repository contains exercises and examples for practicing testing in JavaScript using the Jest library. It includes practical tests for JavaScript functions and examples of how to use the AAA pattern and TDD approach. The repository also has a calculator class with methods for addition, subtraction, multiplication, and division, and includes tests grouped by method using the describe() method.

## Objectives

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

## 🔧 How to Use
Each exercise is located in its own file in the `exercises` directory. To practice a particular exercise, open the corresponding file and write your tests following the instructions in the file. The `calculator.js` file contains the calculator class and its methods for addition, subtraction, multiplication, and division.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/MussieTeka/JavaScript-Jest-Testing/issues).

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Resources

- [Jest Documentation](https://jestjs.io/)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
