//a counting Iterable
//this is an Iterable because it implements the Iterable interface
//its Symbol.iterator property returns an object (this) that implements the next() function
// class MyIterable {
//     constructor(limit) {
//         this.limit = limit;
//         this.count = 1; 
//     }

//     next() {
//         // console.log("I'm an iterator!");
//         if (this.count <= this.limit) {
//             return { done: false, value: this.count++ };
//         } else {
//             return { done: true, value: undefined };
//         }
//     }
  
//     //well known symbol names the factory function
//     //the factory function returns an object that implements the Iterator interface
//     //the Iterator interface is implementation of the next() function
//     [Symbol.iterator]() {
//       return this;
//     }
//   }

  
//   let myIterable = new MyIterable(4);
//   //so, as an Iterable, I can pass MyIterable to a language construct that expects an Iterable, like loop
//   //the loop will use the factory function to get the iterator object and in each round of the loop
//   //it will call next() on it. To the loop, it will look like and can be treated as an array.
//   for (let iteration of myIterable) {
//     console.log(iteration);
//   }

//   //try it again
//   for (let iteration of myIterable) {
//     console.log(iteration);//nothing happens here. Single use.
//     //for this instance of MyIterable, count == limit, so next() returns done and the loop does nothing
//   }

//   //to fix this, when a new MyIterable instance is created, it needs to get or know about a new initial
//   //count and limit value
//   //so provide a closure so that next() has the initial limit and count value from the environment it was
//   //created in.

class MyIterable {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1, limit = this.limit;//scope of these is within the factory function and a closure for the iterator object returned
        //closure - next keeps access to these variables every time Symbol.iterator() creates a new Iterator
        //also, not using the class property which is fixed for a given iterable instance and for all created iterator instances

        return {
            next() {
                if (count <= limit) {//no 'this' used here
                    return { done: false, value: count++ };
                } else {
                    return { done: true, value: undefined };
                }
            }
        }
    }
}

let myIterable = new MyIterable(4);//create the instance once

for (let iteration of myIterable) {//using MyIterable in a loop calls the factory function to get a new iterator instance
    console.log(iteration);//iterator instance has new initial count value because of the closure above
}

//try it again
for (let iteration of myIterable) {
    console.log(iteration);//works
}

//GOT IT!!!