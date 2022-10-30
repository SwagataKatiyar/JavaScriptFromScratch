//Var VS  Let & Const

/*1. Var was used before EcmaScript.Let and const came after it. */

/*2. Var is not scope safe. While let & const are limited to scope they are defined inside.*/ 

{
   var varVariable= 5;
   let letVariable= 15;
   const constVariable= 25;
}
console.log(varVariable); //not scope safe
// console.log(letVariable); // Throws error
// console.log(constVariable); //Throws error



/*3. It overwrites a value of existing Variable. While let and const doesn't allow that.*/
var a="a";
let b="b";
const c="c";

if(true){
  var a=2;
  let b= 3;
  const c= 4;
}

console.log(a); //value of a is manipulated according to the later value.
console.log(b); //value of b is same as initialised
console.log(c); //value of c is same as initialised

//Example 2:
//using const or let
let i=9;
for(let i=0; i<5;i++){
  //does something
}
console.log(i); // The value doesn't change

//using var 
var ind=9;
for(var ind=0; ind<5;ind++){
  //does something
}
console.log(ind); // The value changes.



//4. let and const doesn't allow to access variable before declaration like var because it is hoisted upside down.. */

// console.log(aLet); -throws Error
console.log(aVar); //Print "Undefined"
// console.log(aConst); -throws Error
var aVar=16;
const aConst=13;
let aLet=1;