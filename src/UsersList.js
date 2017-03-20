const UsersList = (containerId, users) => {
    const container = $(containerId);
    container.empty()
    const div = $("<div class='panel panel-default'></div");
    const allUsers = users.map( user => {
        let otherUsers;
        let button;
        if(user.managerId) {
            let manager = findManager(users, user.managerId);
            otherUsers = `<option val="${manager[0].id}">${manager[0].name}</option>`
            button = `<button class="btn btn-danger">Demote</button>`
        } else {
            otherUsers = `<option val=>None</option>`
            button = `<button class="btn btn-primary">Promote</button>`
        }

        otherUsers += users.map( (_user) => {
            if(_user.id !== user.id) {
                return `<option val="${_user.id}">${_user.name}</option>`
            }
        }).join('')
        return `<div class="panel-heading">${user.name}</div>
                <div class="panel-body">
                    <div class="form-group">
                        ${button}
                    </div>
                    <form-group>
                        <label>Managed by:</label>
                        <select class="form-control">${otherUsers}</select>
                    </form-group>
                </div>
                `
    }).join('')

    div.append(allUsers);
    container.append(div);
}


const findManager = (users, managerId) => {
    return users.filter( (user) => user.id === managerId)
}

export default UsersList;
