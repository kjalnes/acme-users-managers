import { promoteOrDemoteUser } from "./index"

const UsersList = (containerId, users, selected, onSelect) => {
    console.log('khsdfdjk')
    const container = $(containerId);
    container.empty();

    const div = $("<div class='panel panel-default'></div");

    // map through all the users returned from the backend and return a select of options for each user
    const allUsers = users.map( user => {
        let btnClass = user.isManager ? "btn-danger" : "btn-primary";
        let btnText = user.isManager ? "Demote" : "Promote";
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
                        <button id="${user.id}" class="btn ${btnClass}">${btnText}</button>
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


    $('button').on('click', function() {
        const id = this.id;
        promoteOrDemoteUser(id);
    });
}

export default UsersList;
