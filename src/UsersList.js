const UsersList = (containerId, users) => {
    const container = $(containerId);
    const ul = $("<ul></ul");
    const li = users.map( user => {
        return `<li>${user.name}</li>`
    }).join('')
    ul.append(li);
    container.append(ul);
    console.log(users)
}

export default UsersList;
