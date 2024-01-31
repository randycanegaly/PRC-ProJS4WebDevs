let num = 1;
let obj = {};

// These types do not have iterator factories
console.log(num[Symbol.iterator]);  // undefined //Symbol.iterator is the wellknown symbol used as the name of the property that returns the factory function. Calling the factory function returns the Iterator - the thing that implements the Iterator interface.
console.log(obj[Symbol.iterator]);  // undefined

let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
//let els = document.querySelectorAll('div');

// These types all have iterator factories
console.log(str[Symbol.iterator]);  // f values() { [native code] } <-- Symbol.iterator returns the factory function object
console.log(arr[Symbol.iterator]);  // f values() { [native code] }
console.log(map[Symbol.iterator]);  // f values() { [native code] }
console.log(set[Symbol.iterator]);  // f values() { [native code] }
//console.log(els[Symbol.iterator]);  // f values() { [native code] }

// Invoking the factory function produces an Iterator
console.log(str[Symbol.iterator]());  // StringIterator {} <-- invoking the factory function returns the Iterator
console.log(arr[Symbol.iterator]());  // ArrayIterator {}
console.log(map[Symbol.iterator]());  // MapIterator {}
console.log(map[Symbol.iterator]().next());//these all return the same values because they are separate iterator instances. Duh.
console.log(map[Symbol.iterator]().next()); 
console.log(map[Symbol.iterator]().next()); 
console.log(map[Symbol.iterator]().next()); 
console.log(map[Symbol.iterator]().next()); 
console.log(set[Symbol.iterator]());  // SetIterator {}
//console.log(els[Symbol.iterator]());  // ArrayIterator {}
