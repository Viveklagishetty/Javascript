// // 1. User Input 

// let name = prompt("What is your name?");
// let age = Number(prompt("What is your age?"));
// let monthlySalary = Number(prompt("What is your monthly salary?"));
// let loanAmount = Number(prompt("What is your loan amount?"));

// // Display User Information
// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Monthly Salary: " + monthlySalary);
// console.log("Loan Amount: " + loanAmount);

// // 2. Eligibility Check (Logical Operators)
// if(age >= 21 && age <= 60 && monthlySalary >= 25000){
//     console.log( "you are eligible for the loan.");
// }else{
//     console.log("you are not eligible for the loan.");
// }

// // 3. Emi Calculation (Operators)
// let emi = loanAmount / 12;
// console.log("Your monthly EMI is: " + emi);

// // 4. Loan Category (If-Else)
// if(loanAmount > 500000){
//     console.log("High Loan");
// }else if(loanAmount > 200000){
//     console.log("Medium Loan");
// }else{
//     console.log("Low Loan");
// }

// // 5. Risk Level  (Ternary Operator)

// let riskLevel = (monthlySalary > 50000) ? "Low Risk" : "High Risk";
// console.log("Risk Level: " + riskLevel);

// //6. Customer Type (Switch Case)

// let customerType;
// switch(true){
//     case(emi > 40000):
//         customerType = "Premium Customer";
//         break;
//     case(emi > 20000):
//         customerType = "Standard Customer";
//         break;
//     default:
//         customerType = "Basic Customer";   
// }

// //7. Type Conversion

// //  Taking Inputs

// let ageInput = prompt("Enter your age:");
// let salaryInput = prompt("Enter your monthly salary:");
// let loanInput = prompt("Enter your loan amount:");

// // Before Conversion
// console.log("Before Conversion:", typeof(ageInput));// string
// console.log("Before Conversion:", typeof(salaryInput));// string
// console.log("Before Conversion:", typeof(loanInput));// string  

// // Convert To Numbers
// let ageNumber = Number(ageInput);
// let salaryNumber = Number(salaryInput);
// let loanNumber = Number(loanInput);

// // After Conversion
// console.log("After Conversion:", typeof(ageNumber));// number
// console.log("After Conversion:", typeof(salaryNumber));// number
// console.log("After Conversion:", typeof(loanNumber));// number  
