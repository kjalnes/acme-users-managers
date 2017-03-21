const _conn = require('./conn');

const User = _conn.define('user', {
    name: _conn.Sequelize.STRING,
    isManager: {
        type:_conn.Sequelize.BOOLEAN(),
        defaultValue: false
    }
}, {
    classMethods: {
        getUser: function(id) {
            return this.findOne({
                where: {
                    id: id
                }
            })
        },
        getUsers: function() {
            return this.findAll({
                order: [
                    ['name', 'DESC']
                ]
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
        },
        removeManagerIds: function(id) {
            return this.update(
                { managerId: null },
                { where: { managerId: id }}
            )
        }
    },
    instanceMethods: {
        changeManagerRole: function() {
            const isManager = this.isManager; // true or false
            return this.update({
                isManager: !isManager
            })
        },
        updateUsersManager: function(managerId) {
            return this.update(
                { managerId: managerId }
            )
        }
    }
});

module.exports = User;
