File name:ArrowFunction.js   
## Arrow Functions in JavaScript   

Arrow functions are a concise way to write functions in JavaScript. They were introduced in ES6 and provide a more readable and compact syntax compared to traditional function expressions.

Normal Function vs. Arrow Function   
Normal Function
- This is a standard function declaration.
- The function PrintMsg prints "Hello JS" to the console.

Arrow Function
- This is an arrow function equivalent to PrintMsg.
- It removes the need for the function keyword.
- If there is only one statement, the curly braces {} can be omitted.
  

Arrow Function with Parameters
- This arrow function takes two parameters and returns their sum.
- It works the same way as a traditional function but with shorter syntax.
![ArrowFunction](https://github.com/user-attachments/assets/f3d97b9c-9cbf-4033-b199-80cb08ceef8a)


File name:CallbackFunction.js   
## Callback Function in JavaScript  
Example 01: Using a Callback Function in greet
- The greet function takes two parameters: a message (msg) and a function (fun).
- It first logs "Hi !" followed by the message.
- Then, it executes the callback function (fun).
- When calling greet, a function that logs "My name is Saminda" is passed as the callback.

Example 02: Using a Callback Function in myArr
- multyTwo is a function that multiplies a number by 3.
- myArr is a function that takes a function (mul) and a list of numbers (...n).
- It loops through each number in n, applies the function mul, and logs the result.
![CallbackFunction](https://github.com/user-attachments/assets/87afd0d3-8f8f-435e-b7a7-631f7c37969a)


File name: Function.js  
## Function in JavaScript
1. Function for Printing (PrintMsg)
- Declares a function named PrintMsg.
- Logs "Hello JS" to the console.
- Calls PrintMsg, executing the function.

2. Function for Summation (sum)
- Defines a function named sum that takes two parameters (a and b).
- Returns the sum of a and b.
- Calls sum(5,3), which returns 8.
  ![Function](https://github.com/user-attachments/assets/fed816ca-aa03-48f9-a880-1400ca95ed07)


File name: Prime.js
## Prime Numbers in JavaScript  
![Prime](https://github.com/user-attachments/assets/eaa9483b-afc2-4dfa-8538-288557f6209f)


File name: TribleDotConcept.js
## Using the Rest Operator (...) in JavaScript
This code demonstrates the usage of the rest operator (...) to handle multiple function arguments dynamically. The rest operator collects multiple values and stores them in an array.

1. Printing Multiple Numbers as an Array  
    - The function Numbers takes multiple arguments using ...n and logs them as an array.


2. Summation Using forEach  
    - The function myNum accepts multiple numbers, iterates over them using forEach, and calculates the sum.


3. Summation Using reduce()  
    - The function myNumber uses the reduce() method to sum all numbers efficiently.
![TribleDotConcept](https://github.com/user-attachments/assets/408aafc3-05e8-4214-adca-d831b564fcaa)
