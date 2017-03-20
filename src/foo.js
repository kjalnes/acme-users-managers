export default class Foo {
    constructor({ name }) {
        this.name = name;
    }
    sayHi() {
        console.log('hello ' + this.name + ' from foo!');
    }
}

// function Foo() {
//         console.log('hello from foo!');
// }

