const conn = require('./conn');
const User = require('./User')

User.belongsTo(User, { as: 'manager' }); // creates managerId in the db
User.hasMany(User, { as: 'employees', foreignKey: 'managerId' });
// a user can have other users (as employees), that are referenced by the employee's managerId

const sync = () => {
    return conn.sync({ force: true})
}

const seed = () => {
    return sync()
    .then( () => {
        Promise.all([
            User.create({ name: "Moon", isManager: true }),
            User.create({ name: "Leonard", isManager: true, managerId: 1 }),
            User.create({ name: "Nancy Jade", managerId: 1 }),
            User.create({ name: "Cornflakes Marge", managerId: 2 })
        ])
    })
}

module.exports = {
    sync,
    seed,
    models: {
        User
    }
}
