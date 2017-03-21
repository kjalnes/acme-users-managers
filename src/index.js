// entry point for webpack
import Foo from './foo';
import $ from 'jquery';
import UsersList from './UsersList';
import ManagersList from './ManagersList';
// import * as API from "./api";

const state = {
    users: [],
    managers: [],
    selected: null
};

function getData() {
    Promise.all([
        getUsers(),
        getManagers()
    ])
    .then(result => {
        state.users = result[ 0 ];
        state.managers = result[ 1 ];
        render();
    });
}
getData();

function getUsers() {
    return $.get('/api/users');
}

function getManagers() {
    return $.get('/api/managers');
}

// export to make available in UsersList.js
export function promoteOrDemoteUser(id) {
    $.ajax({
        method: 'PUT',
        url: `/api/users/${id}`,
        contentType: 'application/json'
    })
    .then( () => {
        getData();
    });
}


function render() {
    UsersList('#usersList', state.users);
    ManagersList('#managersList', state.managers);
}
