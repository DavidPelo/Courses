class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [key, value];
    } else {
      while (this.data[index] != null) {
        index++;
      }
      this.data[index] = [key, value];
    }
  }

  get(key) {
    let index = this._hash(key);
    const currentBucket = this.data[index];
    console.log(currentBucket);
    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;

    // let index = this._hash(key);
    // return this.data[index];
  }

  keys() {
    const keysArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 54);
myHashTable.set('oranges', 2);

console.log(myHashTable);
