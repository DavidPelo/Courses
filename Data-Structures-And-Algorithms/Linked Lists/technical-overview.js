const basket = ['apples', 'grapes', 'pears'];

// linked list: apples -> grapes -> pears

//apples
//8947 -> grapes
//        8742 -> pears
//                372 -> null

// Array vs Linked List
// Elements in a linked list are not indexed
// Nodes in a linked list are stored in dispersed memory locations
// Traversing a linked list is much slower than an array
// Linked List, insert and delete is much faster because you do not need to shift all elements

// prepend O(1)
// append  O(1)
// lookup  O(n)
// insert  O(n)
// delete  O(n)

//Pointer example
const obj1 = { a: true };
const obj2 = obj1;

obj1.a = 'booya';

console.log('1', obj1);
console.log('2', obj2);