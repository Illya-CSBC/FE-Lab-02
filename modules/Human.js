export default class Human {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

// Task 04
  getInfo(prop) {
    return (prop === null
      ? {
        name: this.name,
        age: this.age,
        weight: this.weight,
        gender: this.gender,
      }
      : `Name: ${this.name}; Age: ${this.age}; Weight: ${this.weight}; Gender: ${this.gender}`);
  }

  greeting() {
    return "Hi!"
  }
}