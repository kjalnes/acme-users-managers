// entry point for webpack
import $ from 'jquery';
import UsersList from './UsersList';
import ManagersList from './ManagersList';

const state = {
    users: [],
    managers: []
};

function getUsers() {
    return $.get('/api/users');
}

function getManagers() {
    return $.get('/api/managers');
}

function render() {
    UsersList('#usersList', state.users);
    ManagersList('#managersList', state.managers);
}

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

export function changeManager(id, managerId) {
    const newManagerId = managerId !== "" ? managerId : null;
    $.ajax({
        method: 'PUT',
        url: `/api/users/${id}`,
        contentType: "application/json",
        data: JSON.stringify({ managerId: newManagerId})

    })
    .then(getData);
}

export function promoteOrDemoteUser(id) {
    $.ajax({
        method: 'PUT',
        url: `/api/users/${id}`,
        contentType: 'application/json',
        data: JSON.stringify({ promoteOrDemote: true })
    })
    .then(getData);
}
