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
            User.create({name: "Moon"}),
            User.create({name: "Leo", managerId: 1}),
            User.create({name: "Nanc", managerId: 1})
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
