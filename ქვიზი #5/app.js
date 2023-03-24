// დავალება #1


// function createArray(length) {
//   var arr = [];
//   var num = 11;
//   for (var i = 0; i < length; i++) {
//     arr[i] = num;
//     num += 2;
//   }
//   return arr;
// }
  
//   console.log(createArray(20));

//   function findLargestAndSmallest(arr) {
//     var largest = arr[0];
//     var smallest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         largest = arr[i];
//       }
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }
//     return [smallest, largest];
//   }


// დავალება #2

  function findLongWords(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > 7) {
        result.push(true);
        result.push(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  console.log (findLongWords(['Tbilisi','New York', 'London', 'Washington', 'Berlin']))


// დავალება #3

// ფუნქციებს ვიყენებთ ჯავასკრიპტში რაიმე მოქმედების ასაღწერად, მისი მთავარი დანიშნულება არის დავწეროთ ერთხელ კოდი და შემდეგ რამდენჯერაც დაგვჭირდება იმდენჯერ გამოვიყენოთ სადაც გვინა და აღარ დაგვჭირდება ერთიდაიგივე კოდის ახლიდან დაწერა.


