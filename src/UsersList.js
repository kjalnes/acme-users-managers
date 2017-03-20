const UsersList = (containerId, users) => {
    const container = $(containerId);
    const ul = $("<ul></ul");
    const li = users.map( user => {
        return `<li>${user.name}</li>`
    }).join('')
    ul.append(li);
    container.append(ul);
}


// const User = (user, users) => {
//     const div = $(`<div class="well"></div`);
//     const select = $(`<select></select`);
//     users.forEach()
// }

export default UsersList;
