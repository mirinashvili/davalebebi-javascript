

// დავალება #1

// function squareDigits(num) {
//     let numStr = num.toString().split("");
  
//     let squaredNum = "";
  
//     for (let number of numStr) {
//       squaredNum += Math.pow(number, 2);
//     }
  
//     return Number(squaredNum);
//   }
  
//   squareDigits(92); 


// დავალება #2

// function maxAndMin(str) {
//   const numbers = [];

//   let currentNumber = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       currentNumber += str[i];
//     } else if (str[i] === " ") {
//       numbers.push(Number(currentNumber));
//       currentNumber = "";
//     }
//   }

//   let min = numbers[0];
//   let max = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     } else if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return `${max} ${min}`;
// 

// დავალება #3


// function SortDecreasing(num) {
//     const numStr = num.toString().split("");
  
//     const sortedNum = numStr.sort((a, b) => b - a);
  
//     return Number(sortedNum.join(""));
//   }
  
//   console.log(SortDecreasing(123456789));



// სავარჯიშო

// function number (item) {

//     let max = item[0];
//     let min = item[0];
//  item.forEach(element => {


//     if (element > min) {
//         min = element
//     }

//     if (element < max) {
//         max = element
//     }

   
//  });

//  console.log(min,max);
// }

// console.log(number([1,2,3,4,5,6,7,8,9,10]) );

// ------------------------------------------------


// function getShortestWordLength(string) {
//     let words = string.split(" ");
  
//     let shortestWordLength = string.length;
  
//     words.forEach(function (word) {
//       if (word.length < shortestWordLength) shortestWordLength = word.length;
//     });
  
//     return shortestWordLength;
//   }

// --------------------------------------------


// function returnMiddle(string) {
//     if (string.length % 2 != 0) {
//       let charIndex = Math.trunc(string.length / 2);
//       return string.charAt(charIndex);
//     } else if (string.length % 2 === 0) {
//       let charIndex = string.length / 2;
  
//       return `${string.charAt(charIndex - 1)}${string.charAt(charIndex)}`;
//     }
//   }