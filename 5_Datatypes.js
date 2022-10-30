/* PRIMITIVE TYPES: 
1. Null
2. Number
3. String
4. Undefined
5. Boolean 
6. Symbol
7. BigInt

*/

/*The value null represents the intentional absence of any object value. It's not an object but a bug. However, it's type is considered as object right now.*/
let a = null; //Null
console.log(typeof(a));

let b = 345; //Number
console.log(typeof(b));

let c = true; // Boolean
console.log(typeof(c));

let d = BigInt("567") + BigInt("3") //Big Int
console.log(typeof(d));

let e = "Harry"; //String
console.log(typeof(e));

let f = Symbol("I am a nice symbol"); //Symbol
console.log(typeof(f));

let g; //Undefined
console.log(typeof(g));



/* Non Primitive Data Type - Object
*/
const obj = {
  "Swagata": true,
  "Joseph": "Boy",
  "Rohan": 56,
  "Rushali": undefined
}
console.log(obj["Swagata"]) //true
console.log(obj["Sanya"]) //undefined