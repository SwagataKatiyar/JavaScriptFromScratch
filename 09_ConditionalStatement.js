//IF Condition:

let a= prompt("Input a natural number!")
a= Number.parseInt(a);
if(a<=0){
  alert("The value is incorrect!!")
}
console.log("-------------------------");

//IF ELSE condition:
let as= prompt("Hey, What's your age?");
as= Number.parseInt(as);
if(as>18){
   alert("You are eligible to vote!")
}
else{
   alert("You are not eligible to vote!")
}

console.log("-------------------------");

//IF ELSE LADDER condition:

let ans= prompt("What's your age?");
ans= Number.parseInt(ans);
if(ans>=60){
  alert("You are a senior citizen!")
}
else if(ans>=18 && ans<60){
   alert("You are an adult!")
}
else if (ans>=13 && ans<=17){
   alert("You are a teenager!")
}
else if(ans>=1 && ans<=12){
   alert("You are a kid!")
}
else{
   alert("Invalid input")
}

//IF ELSE LADDER condition:
