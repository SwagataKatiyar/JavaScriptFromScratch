//1. Use logical operator to find if the age lies between 10-20
let a= 20;

if(a>10 && a<20) //(a>=10 && a<=20 when- including)
{
  
  console.log("The age lies between 10 and 20")
}
else{
  console.log("The age is out of bound")
}

  console.log("----------------------------------")

//2. Demonstrate use of Switch case in Js
let c=3;

switch(c){
  case 1:   console.log("1");
    break;
  case 2:   console.log("2");  
    break;
  case 3:   console.log("3");
    break;
  default: "None";
}

  console.log("----------------------------------")

//3. WAP to find if number is divisible by 2 & 3

let res= 12;
if(res%6==0){
    console.log("Divisible");
}
else {
    console.log("Not Divisible");
}

  console.log("----------------------------------");

//4. Print "you can drive" or not drive based on age.

let b= 46;

console.log(b>=18? "Drive": "Not Drive");

  console.log("----------------------------------");

              
//5. WAP to find if number is divisible by either 2 & 3

let rs= 15;
if(rs%3==0|| rs%2==0){
    console.log("Divisible");
}

else {
    console.log("Not Divisible");
}