//EXPRESSION

/*An expression is a combination of terms that are combined by using mathematical operations such as subtraction, addition, multiplication, and division */

/*------------------------------------------------------*/

//OPERATORS 

// 1. Arithmetic Operators 
let a = 20;
let b = 6;
console.log("a + b = ", a + b) //Addition
console.log("a - b = ", a - b) //Subtraction
console.log("a / b = ", a / b) //Division
console.log("a ** b = ", a ** b) //Multiply
console.log("a % b = ", a % b) //Remainder
console.log("++a = ", ++a)  //Pre-Increment
console.log("a++ = ", a++)  //Post-Increment
console.log("--a = ", --a)  //Pre-Decrement
console.log("a-- = ", a--)  //Post-Decrement
console.log("a = ", a)      

console.log("-------------------------------------");

// 2. Assignment Operators 
let assign = 1;
assign += 5 // assign = assign + 5
console.log("Value is now = ", assign)
assign -= 5 // assign = assign - 5
console.log("Value is now = ", assign)
assign *= 5 // assign = assign * 5
console.log("Value is now = ", assign)
assign /= 5 // assign = assign / 5
console.log("Value is now = ", assign)

console.log("-------------------------------------");

// 3. Comparison Operators 
let comp1 = "3";
let comp2 = 3;


// == is a comparison operator, which transforms the operands having the same type before comparison.

console.log("comp1 == comp2 is ", comp1 == comp2) //TRUE

//=== is a strict equality comparison operator which  performs type casting for equality. If we compare 2 with “2” using ===, then it will return a false value.

console.log("comp1 === comp3 is ", comp1 === comp2) //FALSE

//Conclusion: The == operator will compare for equality after doing any necessary type conversions. The === operator will not do the conversion, so if two values are not the same type === will simply return false. Both are equally quick.

/*------------------------------------------------------*/

//Like the equality operator, the inequality operator will convert data types of values while comparing. 
  
console.log("comp1 != comp2 is ", comp1 != comp2) //false

//!== is strictly Not Equal and will not convert data types.

console.log("comp1 !== comp2 is ", comp1 !== comp2) //true




console.log("comp1 > comp2 is ", comp1 > comp2)

console.log("-------------------------------------");

// 4. Logical Operators

let x = 5;
let y = 6;
console.log(x<y && x==5) //and
console.log(x>y || x==5) //or
console.log(!false) //not
