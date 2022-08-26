let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
      console.log('ahhhhhh!');
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

// Hash Tables are super fast, but collisions will slow 
// down reading/writing to 0(n/k), simplified to O(n)

// Maps allow you to save any data type as a key
const a = new Map()

// Sets are like maps, but they only store keys, no values
const b = new Set()

console.log(user);