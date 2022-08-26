// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Hannah',
//   age: 28
// }

// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = {
//   name: 'Hannah',
//   age: 28
// }

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Hannah",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "Author"],
// };
// person.role.push('admin');
// person.role = [20, 'engineer'];

enum Role {
  ADMIN, 
  READ_ONLY,
  AUTHOR
};

const person = {
  name: "Hannah",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('author works');
}
