// დავალება #1

// function newelement (item) {

//         if (item % 2 === 0) {

//             console.log('ლუწი');
//         } else {
//             console.log('კენტი');
//         }
// }

// newelement (7) 

// ----------------------------------

// დავალება #2

// function SumOfPositives(numbers) {
//     let sum = 0;
  
//     for (let number of numbers) {
//       if (number > 0) {
//         sum += number;
//       }
//     }
  
//     return sum;
//   }
  
//   console.log(SumOfPositives([1, -5, 12, 10]));

// ---------------------------------
// დავალება #3


// function number (item) {

    
//     return item * -1

    
// }
// console.log(number (-6) );


// დავალება #4

// function reverseString(string) {
//     let o = "";
  
//     for (let i = string.length - 1; i >= 0; i--) {
//       o += string[i];
//     }
//     return o;
//   }

//   console.log(reverseString ('mamuka'));


  // შებრუნებულ სტრინგს მაგლითადconst reverseString = (string) => string.split("").reverse().join("");

// ---------------------------------------

// დავალება #5


// function boolean (item) {

//     if (item === true) {

//         console.log('yes');
//     } else {

//         console.log('no');
//     }

// }

// console.log(boolean (false) );

// -------------------------------


// დავალება #5 

// function number (item) {

//     return -item

// }

// console.log(number (-80));

// ------------------------------------


// დავალება #6

// function numberToString(number) {
//     return number.toString();
//   }
  
//   console.log(numberToString(10));

// ------------------------------------

// დავალება #7


// function newString (string) {

//     return string.slice (1, -1)
// }

// console.log(newString ('mamuka'));

// -----------------------------

// დავალება #8

// let sum = 0;

// for (let i = 10; i < 180; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum + i;
//   }
  
// }
// console.log(sum);



// function multiply(from, to) {
//     let sum = 0;
//     for (let i = from; i < to; i++) {
//       if (i % 5 === 0 || i % 3 === 0) {
//         sum += i;
//       }
//     }
  
//     return sum;
//   }
// console.log(multiply(20, 90));

// ----------------------------------------

// დავალება #9


// const squareSum2 = (numbers) =>
//   numbers.reduce((sum, number) => sum + number ** 2, 0);


// დავალება #10
// function removeUnderScores(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(removeUnderScores("this is string"));

