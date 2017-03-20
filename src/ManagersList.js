const ManagersList = (containerId, users) => {
    const container = $(containerId);
    container.empty()
    const div = $("<div class='panel panel-default'></div");
    const allUsers = users.map( user => {
        let employees;
        if(user.employees.length > 0) {
            employees = user.employees.map( (employee) => {
                return employee.name
            }).join(', ')

            return `<div class="panel-heading">${user.name} currently manages</div>
                    <div class="panel-body">${employees}</div>`
        }
    }).join('')

    div.append(allUsers);
    container.append(div);
}


export default ManagersList;
