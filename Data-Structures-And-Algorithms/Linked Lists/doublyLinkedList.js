class DoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null, prev: this.tail };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head, prev: null };
    // newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    } 

    const newNode = { value: value, next: current.next, prev: current };
    current.next.prev = newNode;
    current.next = newNode;
    this.length++;

    return this.printList();
  }

  remove(index) {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    current.next.next.prev = current;
    this.length--;

    return this.printList();
  }
}

const myDll = new DoublyLinkedList(10);

myDll.append(5);
myDll.append(16);
myDll.prepend(20);
myDll.prepend(20);
myDll.insert(2, 49);
myDll.insert(4, 3);

console.log(myDll.printList());
