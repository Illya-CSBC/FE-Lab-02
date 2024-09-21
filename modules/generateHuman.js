import Man from "./Man.js";
import Woman from "./Woman.js";

export default function generateHuman() {
  return (
    Math.random() > 0.5
    ? new Man(
      generateName("male"),
      generateNum(18, 80),
      generateNum(50, 180)
    )
    : new Woman(
      generateName("female"),
      generateNum(18, 80),
      generateNum(40, 100)
    )
  )
}


function generateName(gender) {
  const NAMES_MALE = [
    "Illya",
    "Bogdancha",
    "Ivan",
    "Leonid",
    "Viktor",
    "Petro",
    "Olexander",
    "Vadym",
    "Danil",
  ]

  const NAMES_FEMALE = [
    "Kristina",
    "Oksana",
    "Maria",
    "Anastasia",
    "Sophia",
    "Olga",
    "Ksenia",
    "Anita",
    "Karolina"
  ]

  return (
    gender === "male" ?
      NAMES_MALE[generateNum(0, NAMES_MALE.length - 1)]
    : gender === "female" ?
      NAMES_FEMALE[generateNum(0, NAMES_MALE.length - 1)]
    : "Netflix moment"
  )
}

export function generateNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}