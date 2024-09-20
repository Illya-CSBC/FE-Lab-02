import task_numerating from "./modules/task_numerating.js";

task_numerating("Task 02");

const NOW_YEAR = new Date().getFullYear();

const whoami = (name, year_of_birth = 1991) => {
  return `Я ${name}, мені ${NOW_YEAR - year_of_birth} років`;
}

console.log(whoami("Ukraine"))
console.log(whoami("Illya", 2005))

task_numerating("Task 03")

class Human {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }
}