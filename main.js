import findHuman from "./modules/findHuman.js";
import generateHuman from "./modules/generateHuman.js";

export default async function main() {
  const people = generateHuman(15);
  console.log(people);

  const searchingArguments = {
    "field": "",
    "value": ""
  }

  searchingArguments.field = "name"
  searchingArguments.value = "Illya"
  console.log(`\nSearching arguments ${searchingArguments.field}:${searchingArguments.value}`);
  await findHuman(people, searchingArguments.field, searchingArguments.value)
    .then(person => console.log(person))
    .catch((err) => console.log(err))

  searchingArguments.field = "age"
  searchingArguments.value = 18
  console.log(`\nSearching arguments ${searchingArguments.field}:${searchingArguments.value}`);
  await findHuman(people, searchingArguments.field, searchingArguments.value)
    .then(person => console.log(person))
    .catch((err) => console.log(err))

  searchingArguments.field = "name"
  searchingArguments.value = "Kris"
  console.log(`\nSearching arguments ${searchingArguments.field}:${searchingArguments.value}`);
  await findHuman(people, searchingArguments.field, searchingArguments.value)
    .then(person => console.log(person))
    .catch((err) => console.log(err))

  searchingArguments.field = "age"
  searchingArguments.value = "46"
  console.log(`\nSearching arguments ${searchingArguments.field}:${searchingArguments.value}`);
  await findHuman(people, searchingArguments.field, searchingArguments.value)
    .then(person => console.log(person))
    .catch((err) => console.log(err))
}