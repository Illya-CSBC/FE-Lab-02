import Human from "./Human.js";

export default class Man extends Human {
  constructor(name, age, weight) {
    super(name, age, weight, "man");
  }

  greeting() {
    return `Hi! My name is ${this.name}! I'm ${this.age}!`;
  }
}
