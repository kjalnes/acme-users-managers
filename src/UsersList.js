import { promoteOrDemoteUser, changeManager } from "./index"

const UsersList = (containerId, users) => {
    const container = $(containerId);
    const div = $("<div class='panel panel-default'></div");
    container.empty();

    const allUsers = users.map( user => {
        let btnClass = user.isManager ? "btn-danger" : "btn-primary";
        let btnText = user.isManager ? "Demote" : "Promote";
        let options = [`<option val="">none</option>`];

        users.forEach(_user => {
            if(_user.isManager && _user.id !== user.id) {
                let option = `<option val="${_user.id}">${_user.name}</option>`;
                if (_user.id === user.managerId) {
                    option = `<option selected val="${_user.id}">${_user.name}</option>`;
                }
                options.push(option);
            }
        });

        return `<div class="panel-heading">${user.name}</div>
                <div class="panel-body">
                    <div class="form-group">
                        <button id="${user.id}" class="btn ${btnClass}">${btnText}</button>
                    </div>
                    <form-group>
                        <label>Managed by:</label>
                        <select id="select-${user.id}" class="form-control otherUsers">
                            ${options}
                        </select>
                    </form-group>
                </div>`
    }).join('')

    div.append(allUsers);
    container.append(div);

    $('button').on('click', function() {
        promoteOrDemoteUser(this.id);
    });

    $('select').on('change', function() {
        const userId = this.id.slice(7);
        const newManagerId = $(this).find(':selected').attr('val');
        changeManager(userId, newManagerId);
    });
}

export default UsersList;
