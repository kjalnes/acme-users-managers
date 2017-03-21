const ManagersList = (containerId, managersAndEmp) => {
    const container = $(containerId);
    container.empty();
    const div = $("<div class='panel panel-default'></div");

    const allManagers = managersAndEmp.map( manager => {
        let employees = "";
        if (manager.employees.length) {
            manager.employees.forEach( (employee) => {
                employees+= `${employee.name}<br>`
            })
        }
        return `<div class="panel-heading">${manager.name} currently manages</div>
                <div class="panel-body">${employees}</div>`

    }).join('');

    div.append(allManagers);
    container.append(div);
}

export default ManagersList;
