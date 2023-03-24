

// 1. Დაწერეთ ფუნქცია რომელსაც გადაეცემა integer ების array მაგალითად
// [10,20,-3,-4,6,45,67] და დააბრუნებს ორი ყველაზე პატარა დადებითი რიცხვის
// ჯამს ამ შემთხვევაში იქნება 16 ~ (არ გამოიყენოთ ჩაშენებული ფუნქციები
// მხოლოდ შეგიძლიათ გამოიყენოდ splice)

// function smalAndBigItem (arr) {

//     let sum = 0;
    
//     let newItem = arr.filter((item ) => item > 0)

//     newItem.splice (2);

  
//     for (let i = 0; i < newItem.length; i++) {
        
//         sum += newItem[i]
//     }

//     return sum
    
// }

// console.log(smalAndBigItem ([21, -4, 3, 11, -4, 20, 21]));


// --------------------------------------------------------


// 2. Დაწერეთ ფუნქცია რომელსაც გადაეცემა string “this is lecture” და დააბრუნებს
// სტრინგს ოღონდ ყველა სიტყვა დაიწყება დიდი ასოთი “This Is Lecture”
// (გამოიყენეთ split და join ასევე toUpperCase)

// function newString(str) {

//     let element = str.split(" "); 
    

//     let newString = element.map(function(element)  {

//       return  element.charAt(0).toUpperCase() + element.slice(1)
//     })

//     return newString.join(" ");
//   }

//   console.log(newString('this is lecture'));


// --------------------------------------

// 3. Დაწერეთ ფუნქცია რომელსაც გადაეცემა წელიწადის თვე 1,2,12 და უნდაა
// დააბრუნო რომელ quarter შია ანუ წლის რომელ ნაწილშია ეს თვე მაგალითად 2
// არის პირველ ნაწილში 6 არის მეორე ნაწილში 9 არის მეოთხე ნაწილში


// function years (month) {

//     if (month >= 1 && month <= 3) {
//         return console.log('პირველი კვარტალი');
//     } else if (month > 3 && month <= 6) {
//         return console.log('მეორე კვარტალი');
//     } else if (month > 6 && month <= 9) {
//         return console.log('მესამე კვარტალი');
//     } else if (month >9  && month <= 12) {
//         return console.log('მეოთხე კვარტალი');
//     } else {
//         console.log('დაფიქსირდა შეცდომა');
//     }
// }

// console.log(years (17));
// console.log(years (2));
// console.log(years (6));
// console.log(years (7));
// console.log(years (10));

// -------------------------------------------------

// 4. Დაწერეთ ფუნქცია რომელიც მიიღებს ორ Integer ს და დააბრუნებს true ს თუ
// მათი ჯამი კენტია ხოლო დააბრუნებს false ს თუ მათი ჯამი ლუწია

// function sum (a, b ) {

//     if ( (a + b) % 2 === 0 ) {
//         return true
//     } else if ((a + b) % 2 !== 0) {

//         return false
//     }
// }

// console.log(sum (5, 15 ));

// ----------------------------------------------------------------


// 5. Დაწერეთ ფუნქცია რომელსაც გადაეცემა a და x არგუმეტნები a არის array
// ხოლო x შეიძლება იყოს ნებისმიერი მონაცემთა ტიპი დააბრუნეთ true თუ array
// ანუ a შეიცავს x აითემს

// function newArray(a, x) {
//     return a.includes(x);
//   }

//   console.log(newArray([2,3,4,5,44,21], 2));