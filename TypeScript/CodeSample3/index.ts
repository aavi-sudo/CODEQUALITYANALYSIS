interface Person {
  name: string;
  age: number;
}

function sortByAge(people: Person[]): Person[] {
  return people.sort((a, b) => a.age - b.age);
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
];

console.log(sortByAge(people));

