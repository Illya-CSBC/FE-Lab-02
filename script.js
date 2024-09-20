import task_numerating from "./modules/task_numerating.js";

task_numerating("Task 02");

const NOW_YEAR = new Date().getFullYear();

const whoami = (name, year_of_birth = 1991) => {
  return `Я ${name}, мені ${NOW_YEAR - year_of_birth} років`;
}

console.log(whoami("Ukraine"))
console.log(whoami("Illya", 2005))

task_numerating("Task 03")
task_numerating("Task 04");

// Task 03
class Human {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

// Task 04
  getInfo(prop) {
    return !prop
      ? {
        name: this.name,
        age: this.age,
        weight: this.weight,
        gender: this.gender,
      }
      : this[prop];
  }

  greeting() {
    return "Hi!"
  }
}

let human1 = new Human("Petro", 21, 90, "male")
console.log(`Null: ${human1.getInfo()}`);
console.log(`Name: ${human1.getInfo("name")}`);
console.log(`Age: ${human1.getInfo("age")}`);
console.log(`Weight: ${human1.getInfo("weight")}`);
console.log(`Gender: ${human1.getInfo("gender")}`);

console.log(`greeting(): ${human1.greeting()}`)

task_numerating("Task 05")

class Man extends Human {
  constructor(name, age, weight) {
    super(name, age, weight, "man");
  }

  greeting() {
    return `Hi! My name is ${this.name}! I'm ${this.age}!`;
  }
}

class Woman extends Human {
  constructor(name, age, weight) {
    super(name, age, weight, "woman");
  }

  greeting() {
    return `Hi! My name is ${this.name}!`;
  }
}

let man1 = new Man("Illya", 18, 81)
console.log(`Petro greeting(): ${man1.greeting()}`);

let woman1 = new Woman("Kris", 18, 52)
console.log(`Petro greeting(): ${woman1.greeting()}`);
