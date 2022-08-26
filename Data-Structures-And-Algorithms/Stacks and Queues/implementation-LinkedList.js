// Stack Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const poppedNode = this.top;
    this.top = this.top.next;
    this.length--;

    return poppedNode;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push("discord");
myStack.push("google");
myStack.push("udemy");
myStack.peek();
myStack.pop();
myStack.pop();

console.log(myStack);

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue(){
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    // const oldFirst = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
