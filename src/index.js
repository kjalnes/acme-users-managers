// entry point for webpack
import $ from 'jquery';
import UsersList from './UsersList';
import ManagersList from './ManagersList';

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

export function changeManager(id, managerId) {
    const newManagerId = managerId ? managerId : 'none'
    $.ajax({
        method: 'PUT',
        url: `/api/users/${id}`,
        data: JSON.stringify({ managerId: newManagerId}),
        contentType: "application/json",
    })
    .then( () => {
        getData();
    });
}

// export to make available in UsersList.js
export function promoteOrDemoteUser(id) {
    $.ajax({
        method: 'PUT',
        url: `/api/users/${id}`,
        contentType: 'application/json',
        data: JSON.stringify({ promoteOrDemote: true })
    })
    .then( () => {
        getData();
    });
}

function render() {
    UsersList('#usersList', state.users);
    ManagersList('#managersList', state.managers);
}
