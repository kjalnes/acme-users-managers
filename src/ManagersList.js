const ManagersList = (containerId, users) => {
    const container = $(containerId);
    const ul = $("<div class='panel panel-default'></div");
    const li = users.map( user => {
        let employees;
        if(user.employees.length > 0) {
            employees = user.employees.map( (employee) => {
                return employee.name
            }).join(', ')

            return `<div class="panel-heading">${user.name} currently manages</div>
                    <div class="panel-body">${employees}</div>`
        }
    }).join('')

    ul.append(li);
    container.append(ul);
}


export default ManagersList;
