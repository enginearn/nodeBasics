// eventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const sum = (a, b) => a + b;
const PI = 3.14;

class SomeMathObject {
    constructor() {
        console.log('object created');
    }
}

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

// 他のファイルからこのファイルを読み込んだときに、sum関数を使えるようにする
module.exports = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;
module.exports.Person = Person;
