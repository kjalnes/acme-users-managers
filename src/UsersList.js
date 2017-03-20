const UsersList = (containerId, users, selected, onSelect) => {
    const container = $(containerId);
    const usersCopy = users.slice();
    container.empty();
    const div = $("<div class='panel panel-default'></div");

    // map through all the users returned from the backend and return a select of options for each user
    const allUsers = users.map( user => {
        let userIsManager = isManager(users, user.id);
        let btnClass = userIsManager ? "btn-danger" : "btn-primary";
        let btnText = userIsManager ? "Demote" : "Promote";
        let options = [`<option val="">none</option>`];
        let otherUsers = users.filter(_user => user.id !== _user.id);

        otherUsers.forEach(otherUser => {
            let option = `<option val="${otherUser.id}">${otherUser.name}</option>`;
            if (otherUser.id === user.managerId) {
                option = `<option selected val="${otherUser.id}">${otherUser.name}</option>`;
            }
            options.push(option);
        });

        return `<div class="panel-heading">${user.name}</div>
                <div class="panel-body">
                    <div class="form-group">
                        <button class="btn ${btnClass}">${btnText}</button>
                    </div>
                    <form-group>
                        <label>Managed by:</label>
                        <select class="form-control otherUsers">
                            ${options}
                        </select>
                    </form-group>
                </div>`
    }).join('')

    div.append(allUsers);
    container.append(div);
}

const getUser = (user, onSelectUser) => {
    const option = `<option val=${user.id}>${user.name}</option>`;
    return option;
}

const onSelectUser = (user) => {
    console.log(user)
}

const isManager = (users, userId) => {
    return users.some( user => user.managerId == userId )
}


const findManager = (users, managerId) => {
    let manager = users.filter( (user) => user.id === managerId)

    if (manager) {
        return { name: manager[0].name, id: manager[0].id };
    }
}



export default UsersList;
