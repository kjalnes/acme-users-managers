const _conn = require('./conn');

const User = _conn.define('user', {
    name: _conn.Sequelize.STRING,
    isManager: {
        type:_conn.Sequelize.BOOLEAN(),
        defaultValue: false
    }
});

module.exports = User;
