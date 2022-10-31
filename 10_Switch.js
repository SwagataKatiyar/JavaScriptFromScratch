/* Why do we use default in switch?

The default statement is executed if no case constant-expression value is equal to the value of expression . If there's no default statement, and no case match is found, none of the statements in the switch body get executed. There can be at most one default statement. 

*/

switch(6){
  case 1: console.log("This is case 1");
    break;
  case 2: console.log("This is case 2");  
    break;
  case 3: console.log("This is case 3");  
    break;
  case 4: console.log("This is case 4");
    break;
  default: console.log("The case is in valid!!"); 
}

/*What does break statement do?

The break statement breaks out of a switch or a loop. In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch. In in a loop, it breaks out of the loop and continues executing the code after the loop.

*/

/*IMPORTANT: Using same cases 
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
    
 Here, case 4,5 using same case result.
 
*/