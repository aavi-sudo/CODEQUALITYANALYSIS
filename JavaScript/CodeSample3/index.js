function sortByAge(people) {
  return people.sort((a, b) => a.age - b.age);
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
];

console.log(sortByAge(people));

