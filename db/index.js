const conn = require('./conn');
const User = require('./User')


// define relationships here

User.belongsTo(User, { as: 'manager' });
User.hasMany(User, { as: 'employees', foreignKey: 'managerId'});

const sync = () => {
    return conn.sync({ force: true})
}

const seed = () => {
    return sync()
    .then( () => {
        Promise.all([
            User.create({name: "Moon", isManager: true }),
            User.create({name: "Leo", isManager: true,  managerId: 1}),
            User.create({name: "Nanc", managerId: 1}),
            User.create({name: "Corn", managerId: 2})
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
