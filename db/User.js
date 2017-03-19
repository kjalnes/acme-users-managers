const _conn = require('./conn');

const User = _conn.define('user', {
    name: _conn.Sequelize.STRING
});

module.exports = User;
