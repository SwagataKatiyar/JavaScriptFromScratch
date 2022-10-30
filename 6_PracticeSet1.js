/*
1. Create a variable of type string and try to add a number to it.
*/

let str = "Swagata";
let concat1= str+ 5;
console.log(concat1); //Swagata5

/*
2. Use TypeOf operator to find the datatype of string in last question.
*/
console.log(typeof(str)); //string

/*
3. Create a const object in js. Can you change it?
*/

const defined ={ pi : "3.14",
                 i  :  "-1",
                 e  :  "2.71",
};

//defined[g]="9.7m/s"; - No, throws error.
      

/*
4. Try to add a new key in const object. Can you change it?
*/

//       defined ={ pi : "3.14",
//                  i  :  "-1",
//                  e  :  "2.71",
// // g : "9.7m/s"- Can't add it cause it throws an error
// };

/*
5. Create a dictionary of 3 new words.
*/

const synonyms= {Candence:"Change in voice",
                Intonation: "Change in voice",
                Modulation: "Change in voice"
               };

console.log(synonyms['Modulation']);
