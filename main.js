// Task 1
const myCat = {
    color: "black",
    name: "Tony",
    lovesCuddles: true,
  };

  const myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2,
    garden: true,
    energyEfficiencyRating: "D",
  };
  
  const myCar = {
    colour: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    milesPerGallon: 20,
  };
  
  const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseYear: 2008,
    leadActor: "Christian Bale",
  };

// Task 2
  let person = {
    name: "Ben",
    likesChocolate: true,
  };
  
  console.log(typeof person.likesChocolate)

person.likesChocolate === true ? console.log("Ben loves chocolate") : console.log("Ben hates chocolate")

// Task 3
let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};


console.log(bensPhrases["smallTalk"]);  

console.log(bensPhrases[desiredPleasantry]);
desiredPleasantry  = "farewell";
console.log(bensPhrases[desiredPleasantry]);
desiredPleasantry  = "smallTalk";
console.log(bensPhrases[desiredPleasantry]);

// Task 4
let me = {
    firstName: "Sumeya",
    lastName: "Ahmed",
    isBootcamper: false,
  };
  
me.isBootcamper = true

console.log(me.isBootcamper)

// Task 5
let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  let communicationText = communication.payload.message.text

console.log(communicationText)

// Task 6

let schoolOfCodeBootcamp = {
    name: "School of Code Bootcamp",
    cohorts: {
      BC17: {
        startDate: "1 Jan 2024",
        students: {

        },
      },
      BC18: {
        startDate: "25 Nov 2024",
        students: {

        },
      },
    }
  };
  
  function addStudent(firstName, lastName, age, birthDay) {
    let studentDetails = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      birthDay: birthDay
    };
  
    schoolOfCodeBootcamp.cohorts.BC18.students[firstName] = studentDetails;
  }
  
  addStudent("Sumeya", "Ahmed", 24, "22/03/2000");
  
  let student = schoolOfCodeBootcamp.cohorts.BC18.students["Sumeya"];
  
  console.log(student.firstName, student.lastName, "Age: " + student.age, "Birthday: " + student.birthDay);
  