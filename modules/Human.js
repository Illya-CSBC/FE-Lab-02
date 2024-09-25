export default class Human {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

// Task 04
  getInfo(prop = null) {
    console.log(prop)
    if (prop === null) {
      console.log('isNull')
      return `Name: ${this.name}; Age: ${this.age}; Weight: ${this.weight}; Gender: ${this.gender}`

    } else {
      return !prop ? {
          name: this.name,
          age: this.age,
          weight: this.weight,
          gender: this.gender,
        } : this[prop]
    }
  }
  greeting() {
    return "Hi!"
  }
}