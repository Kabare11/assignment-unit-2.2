// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we created a variable called name and set its value to Dane.
// we created a conditional statement and checked if the name variable we created earlier is equal to Mary.
// if its equal to mary, we console.log(('Hi, Mary!')
// and if it is not equal to Mary we console.log('How do you do?')
// since the name variable we created earlier is not Mary and it is Dane.
// we will console.log('How do you do?')

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE

// we created a variable named Secret and set it is value to Empty.
// we created another variable named code and set it is value to the numbers 123.
// we created a conditional statement to check if code is equal to 123 the value of the empty variable secret will be 'SUPER'. 
// The value of variable code is reassigned to its Previous Value (123) Multiply by 2
// the new value for variable Code is (123 *2) which is 246
// we created another condtional statement to check if the new value of code which is 246 is greater than 250, if it is greater than 250 the value for our empty variable named secret will be 'duper'
// since 246 is not greater than 246 the value for our empty variable secret will be 'super' beacuse the first condition wa true and the code value was 123.
// we console.log('super')

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we created 3 variables and are the following:
// the first variable we named isStudent and set it is value to a bolean (true or false)
// the second variable we named age and set it is value to 34
// the third variable we named zip and set it is value to 55407
//
// we created a condtional statement to check if the value of variable isStudent is true and the value of variable zip is greater than 800000, and both statement are true we console.log(`You're a student on the West Coast!`)
// we created another condtional statement to check if the value of variable isStudent is false OR value of variable age is less than 30, and if both conditional statement are true we console.log('What are your hobbies?')

// we created another condtional statement to check if the value of variable isStudent is true and if it is true we console.log('Welcome to Prime!')

// and if all the above contional statements are not met or dont run 
// we will console.log('How about the weather?')

// and since our variable isStudent is true, we consol.log('What are your hobbies?')


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// the value of colorOne is red
let colorOne = 'red';

// the value of colorTwo is blue
// the values of the colors are swapped
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // colorTwo assignment is missing
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// the only incorect code in this conditional statement is the use of AND
// we should use OR to check if either of the statement is true and we will
//  console.log('throw away the food!');

if (temp > 39 || time >= 4) {
  // in the description they used AND Operator and the code section they used OR Operator
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// in thge description we are checking if Age is greater than minAge 
// but in the code we are checking if minAge is less than or equal to Age 
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

