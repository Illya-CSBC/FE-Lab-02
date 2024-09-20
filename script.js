import task_numerating from "./modules/task_numerating.js";
import Human from "./modules/Human.js";
import Man from "./modules/Man.js";
import Woman from "./modules/Woman.js";

task_numerating("Task 02");

const NOW_YEAR = new Date().getFullYear();

const whoami = (name, year_of_birth = 1991) => {
  return `Я ${name}, мені ${NOW_YEAR - year_of_birth} років`;
}

console.log(whoami("Ukraine"))
console.log(whoami("Illya", 2005))

task_numerating("Task 03")
task_numerating("Task 04");

let human1 = new Human("Petro", 21, 90, "male")
console.log(`Null: ${human1.getInfo()}`);
console.log(`Name: ${human1.getInfo("name")}`);
console.log(`Age: ${human1.getInfo("age")}`);
console.log(`Weight: ${human1.getInfo("weight")}`);
console.log(`Gender: ${human1.getInfo("gender")}`);

console.log(`greeting(): ${human1.greeting()}`)

task_numerating("Task 05")

let man1 = new Man("Illya", 18, 81)
console.log(`Petro greeting(): ${man1.greeting()}`);

let woman1 = new Woman("Kris", 18, 52)
console.log(`Petro greeting(): ${woman1.greeting()}`);
