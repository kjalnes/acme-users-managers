const _conn = require('./conn');

const User = _conn.define('user', {
    name: _conn.Sequelize.STRING,
    isManager: {
        type:_conn.Sequelize.BOOLEAN(),
        defaultValue: false
    }
}, {
    classMethods: {
        getUsers: function() {
            return this.findAll({
                order: [
                    ['name', 'DESC']
                ]
            })
        },
        getManagers: function() {
            return this.findAll({
                order: [
                    ['name', 'DESC']
                ],
                where: {
                    isManager: true
                }
            })
        },
        getManagersAndEmployees: function() {
            return this.findAll({
               order: [
                    ['name', 'DESC']
                ],
                where: {
                    isManager: true
                },
                include: { model: this, as: 'employees' }
            });
        }
    }
});

module.exports = User;
