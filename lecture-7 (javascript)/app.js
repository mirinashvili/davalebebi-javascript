

// let number = [1,2,3,4,5];

// let newNumber = number.map (function(item ) {

//      if (item % 2 === 1) {

//         return item + 1 ;

//     } else {

//         return item;
//     }
// })

// console.log(newNumber);

// const array = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11]
// const oddArray = array.map((n) => (n % 2 && n + 1) || n)
// console.log(oddArray)



// function unique(string1, string2) {
//     let uniqueString = "";
  
//     for (let i = 0; i < string1.length; i++) {
//       if (uniqueString.indexOf(string1[i]) === -1) {
//         uniqueString += string1[i];
//       }
//     }
  
//     for (let i = 0; i < string2.length; i++) {
//       if (uniqueString.indexOf(string2[i]) === -1) {
//         uniqueString += string2[i];
//       }
//     }
  
//     return uniqueString;
//   }

    
// -----------------------------------


// function number (item) {

//     let newNUmber = item.slice (4, -3)

//     return newNUmber;
// }

// console.log(number ([1,2,3,4,5,6,12,33,11,56,3,11,12]) );



// ---------------------------------


// function addToMiddle(array, element) {
//     if (array.length % 2 === 0) {
//       array.splice(array.length / 2, 0, element);
//     } else {
//       array.splice(Math.floor(array.length / 2), 1, element);
//     }
  
//     return array;
//   }
  
//   console.log(addToMiddle([1, 2, 3, 4, 5, 6, 7], "ამას ვამატებ"));