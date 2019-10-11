const Queue = require('./queue');


class Person{
    constructor(name,code){
        this.name = name;
        this.code = code;
    }
}

let a = new Person('a',1);
let b = new Person('b',10);
let c = new Person('c',3)


let oQueue = new Queue();
oQueue.dequeue(a);
oQueue.dequeue(b);
oQueue.dequeue(c);


oQueue.enqueue();
oQueue.enqueue();
oQueue.enqueue();

console.log(oQueue.toString());





