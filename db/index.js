const conn = require('./conn');
const User = require('./User')


// define relationships here

// User.belongsTo(User) ....

const sync = () => {
    return conn.sync({ force: true})
}

const seed = () => {
    return sync()
    .then( () => {
        Promise.all([
            User.create({name: "Moon"}),
            User.create({name: "Leo"}),
            User.create({name: "Nanc"})
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
