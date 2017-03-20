// entry point for webpack
import Foo from './foo';
import $ from 'jquery';
import UsersList from './UsersList';
import ManagersList from './ManagersList';

const state = {
    users: [],
    selected: null
};

// all async ajax calls shoudl happen here
// render data using imported UsersList and ManagersList


// has to be hooked up in the routes
$.get('/api/users')
    .then( (users) => {
        console.log("users", users)
        UsersList('#usersList', users);
    });


$.get('/api/managers')
    .then( (users) => {
        ManagersList('#managersList', users)
    })

console.dir($("select"))


