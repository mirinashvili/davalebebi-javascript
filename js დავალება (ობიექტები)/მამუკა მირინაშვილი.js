// დავალება #1

// Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადაეცემა შემდეგი ინფორმაცია:
//  სახელი, გვარი, ასაკი, ელ ფოსტა, სასწავლებელი სკოლა, სასწავლებელი უნივერსიტეტი, სამსახურის დასახელება,
//   პოზიცია სამსახურში, სამუშაო გამოცდილება წლებში, საცხოვრებელი ქვეყანა, საცხოვრებელი ქალაქი, საცხოვრებელი 
//   სახლის მისამართი და ეს ფუნქცია დააბრუნებს ობიექტს, ობიექტის სტრუქტურა  გამართეთ სწორად.

// function userProfile (firstNume, lastNume, age, email, school, university, jobTitle, position, workExperience, country, city, address) {

//     return {
//         name: {
//             first: firstNume,
//             last: lastNume
//           },
//           age: age,
//           email: email,
//           education: {
//             school: school,
//             university: university
//           },
//           job: {
//             title: jobTitle,
//             position: position,
//             experience: workExperience
//           },
//           location: {
//             country: country,
//             city: city,
//             address: address
//           }
//     }
// }

// let persone = userProfile ('mamuka', 'mirinashvili', 26, 'mamukamirinashvili@gmail.com', 'shilda #1', 'ilia state university', 'developer', 'react', 'georgia', 'tbilisi')

// console.log(persone);

// -------------------------------------------------



// დავალება #2

// Შექმენით ფუნქცია, რომელსაც პარამეტრების სახით გადაეცემა ობიექტები animal ტიპის ( სახელი, ასაკი, ჯიში, სქესი)
//  და ეს ფუნქცია დაფილტრავს გადაცემულ ცხოველების მასივს სქესის მიხედვით (სქესი აგდაეცემა მეორე პარამეტრის სახით ფუნქციას)

// function filterGender(animals, gender) {

//     return animals.filter(function(animal) {
//       return animal.sex === gender;
//     });
//   }

//   let animals = [
//     { name: "Fluffy", age: 5, breed: "Persian", sex: "female" },
//     { name: "Max", age: 2, breed: "Labrador", sex: "male" },
//     { name: "Buddy", age: 3, breed: "Golden Retriever", sex: "male" },
//     { name: "Lucy", age: 1, breed: "Siamese", sex: "female" }
//   ];
  
//   let filteredAnimals = filterGender(animals, "female");
//   console.log(filteredAnimals);

// ---------------------------------------------------------


// დავალება #3

// Შექმენით ფუნქციები :
// Ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა მასივი humans (სახელი, გვარი, ასაკი, სქესი, ელ.ფოსტა, მობილურის ნომერი) 
// და ეს ფუნქცია დააბრუნებს Users ის კოლექციას ( სრული სახელი, ელ.ფოსტა)


// function createUsers(humans) {
//     let users = [];
//     for (let i = 0; i < humans.length; i++) {
//       let human = humans[i];
//       console.log(human);
//       let fullName = human.firstName + " " + human.lastName;
//       let user = {
//         fullName: fullName,
//         email: human.email
//       };
//       users.push(user);
//     }
//     return users;
    
//   }

//   let humans = [
//     {
//       firstName: "mamuka",
//       lastName: "mirinashvili",
//       age: 26,
//       gender: "Male",
//       email: "mamukamirinashvili@gmail.com",
//       mobileNumber: "595-555-666"
//     },
   
//   ];
  
//   let users = createUsers(humans);
  
//   console.log(users);