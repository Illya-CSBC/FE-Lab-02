export default function search(list, searchField, searchValue) {
  const delay = 500

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = list.filter((person) => person[searchField] === searchValue)

      if (person.length) {
        resolve(person)
      } else {
        reject(`${searchField}:${searchValue} not found`)
      }
    }, delay)
  })
}