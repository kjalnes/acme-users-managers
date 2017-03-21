// entry point for webpack
import Foo from './foo';
import $ from 'jquery';
import UsersList from './UsersList';
import ManagersList from './ManagersList';

// USE STATE !!!!!!!!!!!!!!!!!!!!!!!!!
export const state = {
    users: [],
    selected: null
};

// all async ajax calls shoudl happen here
// render data using imported UsersList and ManagersList


// has to be hooked up in the routes

$.get('/api/users')
    .then( (users) => {
        console.log("users", users)
        state.users  = users;
        UsersList('#usersList', state.users);
    });

$.get('/api/managers')
    .then( (users) => {
        state.users = users;
        ManagersList('#managersList', state.users)
    });


export const demoteUser = (user) => {
    const userId = user.id;
    $.ajax({
        method: 'PUT',
        url: `/api/users/${userId}`,
        contentType: 'application/json',
        data: JSON.stringify({
            isManager: false,
            employees: []
        })
    })
    .then( (user) => {
        state.users.forEach( _user => {
            if(_user.id === user.id) {
                _user.isManager = false;
            }
        })

        UsersList('#usersList', state.users)
        ManagersList('#managersList', state.users)
    })
}

export const promoteUser = (user) => {
    const userId = user.id;
    $.ajax({
        method: 'PUT',
        url: `/api/users/${userId}`,
        contentType: 'application/json',
        data: JSON.stringify({
            isManager: true,
            employees: []
        })
    })
    .then( (user) => {
        state.users.forEach( _user => {
            if(_user.id === user.id) {
                _user.isManager = true;
            }
        })
        ManagersList('#managersList', state.users)
        UsersList('#usersList', state.users)

    })
}








//  ALL AJAX CALLS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
