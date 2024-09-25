import taskNumerating from "./modules/taskNumerating.js";
import Human from "./modules/Human.js";
import Man from "./modules/Man.js";
import Woman from "./modules/Woman.js";
import generateHuman from "./modules/generateHuman.js";
import findHuman from "./modules/findHuman.js";

taskNumerating("Task 02");

const NOW_YEAR = new Date().getFullYear();

const whoami = (name, yearOfBirth = 1991) => {
  return `Я ${name}, мені ${NOW_YEAR - yearOfBirth} років`;
}

console.log(whoami("Ukraine"))
console.log(whoami("Illya", 2005))

taskNumerating("Task 03 && Task 04");

let human1 = new Human("Petro", 21, 90, "male")
console.log(`Null: ${human1.getInfo()}`);
console.log(`Name: ${human1.getInfo("name")}`);
console.log(`Age: ${human1.getInfo("age")}`);
console.log(`Weight: ${human1.getInfo("weight")}`);
console.log(`Gender: ${human1.getInfo("gender")}`);

console.log(`greeting(): ${human1.greeting()}`)

taskNumerating("Task 05")

let man1 = new Man("Illya", 18, 81)
console.log(`Petro greeting(): ${man1.greeting()}`);

let woman1 = new Woman("Kris", 18, 52)
console.log(`Petro greeting(): ${woman1.greeting()}`);

taskNumerating("Task 06")

const people = generateHuman(1);

people.forEach(person => {
  console.log(`Person: ${person.getInfo()}`);
})

taskNumerating("Task 07")

findHuman(people, "name", "Illya")
  .then(person => console.log(person))
  .catch((err) => console.log(err))
