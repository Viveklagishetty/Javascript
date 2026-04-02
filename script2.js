// Section 1: Printing & User Interaction

// 1. Print your name and designation in the console
console.log("Name: Lagishetty Viveka Datta");
console.log("Designation: Associate Software Engineer");

// 2.Show an alert message
alert("Welcome to JavaScript Session");

// 3. Ask user using confirm() and print the result 
let coding = confirm("Do you like coding?");
console.log("Do you like coding? " + coding);

// 4. Take input using prompt() and print it 
let favcoding = prompt("What is your favorite programming language?");
console.log("Programming Language: " + favcoding);

// 5. Display message on UI using document.writeln()
document.writeln("Good Evening Team");

// section 2: console Methods 

// 6. print a number using console.log() 
console.log(200);

// 7. Print a warning message
console.warn("This is a warning");

//8. print an error message 
console.error("something went wrong");

//9. clear the console after printing above 3 messages 
console.clear();

// section 3: Data Types 

// 10. Create a variable with your name and print its type
let name = "Laghisetty Viveka Datta";
console.log(name);
console.log(typeof(name)); // string

// 11. Store your age and print the datatype
let age = 22;
console.log(age);
console.log(typeof (age)); // number

// 12. Store a boolean value and print it
let isemployee = true;  
console.log(isemployee);
console.log(typeof (isemployee)); // boolean

// 13. Declare a variable without value and print it
let value;
console.log(value); // undefined
console.log(typeof (value)); // undefined

// 14. Assign null to a variable and print it
let data = null;
console.log(data); // null

// section 4: Arrays 

// 15. Create an array of 5 fruits and print it
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits Array:", fruits);

// 16. Print the first and last element of the array
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// 17. Add one more fruit dynamically and print updated array
fruits.push("Pineapple");
console.log("Updated Fruits Array:", fruits);

// 18. Remove the last element and print array.
fruits.pop();
console.log("After Removing Last Fruit:", fruits);

// 19. Find the length of the array
console.log("Number of Fruits:", fruits.length);

// Section 5: Objects

// 20. Create an object for a student (name, age, course)
let student = {
    name: "Lagishetty Viveka Datta",
    age: 22,
    course: "Computer Science",
    // Nested array
    fruits: ["Apple", "Banana", "Mango"]
};
console.log("Student Object:", student);

// 21. Print the student name
console.log("Student Name:", student.name);

//22. Add a new property (college) dynamically
student.college = "JNTUH University";
console.log("Updated Student Object:", student);

//23. Access nested array inside object 
console.log("First fruit from nested array:", student.fruits[0]);
console.log("Last fruits from nested array:", student.fruits[student.fruits.length - 1]);

//24. Update a property value
student.age = 23;
console.log("Updated Student Age:", student.age);

// Section 6: Operators

//declare two numbers
let num1 = 10;
let num2 = 15;

//25. Add two numbers and print result
console.log("Addition:", num1 + num2);

//26. Subtract two numbers
console.log("Subtraction:", num1 - num2);

//27. Multiply two numbers
console.log("Multiplication:", num1 * num2);

//28. Divide two numbers
console.log("Division:", num1 / num2);

//29. Modulus of two numbers    
console.log("Modulus:", num1 % num2);

//30. Use exponent operator (**) to find power
console.log("Exponentiation:", num1 ** 2); // num1 raised to the power of 2

// Section 7: Increment & Decrement

//31. Create a variable and use post increment
let a = 5;
console.log("Post Increment:", a++); // Output: 5 (returns current value, then increments)
console.log("Value after Post Increment:", a); // Output: 6

//32. Create a variable and use pre increment
let b = 10;
console.log("Pre Increment:", ++b); // Output: 11 (increments first, then returns new value)

//33. Show difference between num++ and ++num
let num = 20;
console.log("Using num++:", num++); // Output: 20 (returns current value, then increments)
console.log("Value after num++:", num); // Output: 21

num = 20; // reset num
console.log("Using ++num:", ++num); // Output: 21 (increments first, then returns new value)

//34. Use decrement operator and print values
let count = 5;
console.log("Post Decrement:", count--); // Output: 5 (returns current value, then decrements)
console.log("Value after Post Decrement:", count); // Output: 4

let score = 10;
console.log("Pre Decrement:", --score); // Output: 9 (decrements first, then returns new value)

//35. Predict output 
let x = 5; // Initial value of x is 5
let y = x++; // y gets the value of x (5), then x is incremented to 6
let z = ++x; // x is incremented first (from 6 to 7), then z gets the new value of x (7)
console.log("x:", x); // Output: 7
console.log("y:", y); // Output: 5 
console.log("z:", z); // Output: 7

// Section 8: Real-Time Logic Tasks

//36. Ask user age and check if eligible to vote
let userAge = prompt("Please enter your age:");
if (userAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//37. Ask user name and greet
let userName = prompt("Please enter your name:");
console.log("Hello, " + userName);

//38. Store marks in array and print highest value
let marks = [85, 92, 78, 90, 88];
let highestMarks = Math.max(...marks);
console.log("Marks:", marks);  
console.log("Highest Marks:", highestMarks);

//39. Create object for fruits category and access values
let fruitCategory = {
    citrus: ["Orange", "Lemon", "Lime"],
    berries: ["Strawberry", "Blueberry", "Raspberry"],
    tropical: ["Mango", "Pineapple", "Papaya"]
};

console.log("First Citrus Fruit:", fruitCategory.citrus[0]);
console.log("Berries:", fruitCategory.berries);

//40. Combine prompt + array
let favFruits = [];

favFruits.push(prompt("What is your first favorite fruit?"));
favFruits.push(prompt("What is your second favorite fruit?"));  
favFruits.push(prompt("What is your third favorite fruit?"));

console.log("Your Favorite Fruits:", favFruits); 