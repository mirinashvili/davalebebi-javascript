// დავალება #1

// მასივში ჩაწერეთ 100 რენდომ რიცხვი 500დან 1000მდე. (500<x<1000). იპოვეთ ამ 
// რიცხვთა ჯამი და საშუალო. ლუწი რიცხვები გადაწერეთ მეორე მასივში. (ორიგინალ 
// მასივში დატოვეთ ისევ 100 რიცხვი.


// რენდომ რიცხვები
//   let numbers = [];

//   for (let i = 0; i < 100; i++) {

//   numbers.push(Math.floor(Math.random() * (1000 - 500 + 1)) + 500);

// }

// რიცხვების ჯამი
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
    
//     sum += numbers[i]
// }

// console.log(sum);

// რიცხვების საშუალო

// let average = sum / numbers.length;

// console.log(average);

// ლუწი რიცხვები ახალ მასივში

// let newArray = numbers.filter(x => x % 2 === 0);

// console.log(newArray);
// console.log(numbers);


// ------------------------------------------

// დავალება #2

// იპოვეთ სახელი, რომელიც იწყება და მთავრდება “A”ზე. splice მეთოდით მესამე 
// ელემენტად(0, 1, 2, “ახალი სახელი”) დაამატეთ თქვენი სახელი. slice მეთოდით 
// ბოლო 3 სახელი სხვა მასივში გადაწერეთ და დაბეჭდეთ.


// let names = [ "Ia", "Ani", "Giorgi", "Irakli", "Levani", "Ana", "Tornike", "Dato", "Nika",];


// იპოვეთ სახელი, რომელიც იწყება და მთავრდება “A”ზე.
// let newNames = names.filter ((item) => {

//     return  item[0] === "A" && item [item.length -1] === "a"
// })

// console.log(newNames);

//  splice მეთოდით მესამე 
//  ელემენტად(0, 1, 2, “ახალი სახელი”) დაამატეთ თქვენი სახელი.

//  names.splice (3, 0, 'mamuka')

//  console.log(names);


//  slice მეთოდით 
//  ბოლო 3 სახელი სხვა მასივში გადაწერეთ და დაბეჭდეთ.

//  let lastArray = names.slice(-3);

//  console.log(lastArray);

