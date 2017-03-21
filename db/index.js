const conn = require('./conn');
const User = require('./User')

// define relationships here

User.belongsTo(User, { as: 'manager' }); // creates managerId in the db
User.hasMany(User, { as: 'employees', foreignKey: 'managerId' }); // a user can have other users (as employees), that are referenced by the employee's managerId

const sync = () => {
    return conn.sync({ force: true})
}

const seed = () => {
    return sync()
    .then( () => {
        Promise.all([
            User.create({ name: "Moon", isManager: true }),
            User.create({ name: "Leo", isManager: true, managerId: 1 }),
            User.create({ name: "Nanc", managerId: 1 }),
            User.create({ name: "Corn", managerId: 2 })
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
