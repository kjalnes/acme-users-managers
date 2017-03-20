// entry point for webpack
import Foo from './foo';
import UsersList from './UsersList';
import ManagersList from './ManagersList';
import $ from 'jquery';

const state = {
    users: [],
    selected: null
};

// all async ajax calls shoudl happen here
// render data using imported UsersList and ManagersList

console.log('hello from index.js');
console.log('hello again from index.js');
console.log('hello again from index.js');

// has to be hooked up in the routes
$.get('/api/users')
    .then( (users) => {
        // console.log(users)
        UsersList('#usersList', users)
    });


$.get('/api/managers')
    .then( (users) => {
        ManagersList('#managersList', users)
    })

const foo = new Foo({ name: 'Bar' })
foo.sayHi()
