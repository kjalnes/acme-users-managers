const router = require('express').Router();
const path = require('path');
const db = require('./db')


router.get('/api/users', (req, res, next ) => {
    db.models.User.getUsers()
    .then( (users) => {
        res.send(users)
    })
})

router.get('/api/managers', (req, res, next ) => {
    db.models.User.getManagersAndEmployees()
    .then( (managersAndEmpl) => {
        res.send(managersAndEmpl)
    })
})


// promote, demote, add user to manager, remove user from manager, change user's manager
router.put('/api/users/:id', (req, res, next ) => {
    const id = req.params.id;
    // 1. find the user and demote or promote
    // 2. if demote find all of users employees and set managerId to null
    db.models.User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(user => {
        const isManager = user.isManager; // true or false
        return user.update({
            isManager: !isManager
        })
    })
    .then( (user) => {
        // if user was demoted:
        if(!user.isManager)  {
            db.models.User.update(
                { managerId: null },
                { where: { managerId: id }}
            )
        }
    })
    .then( () => res.sendStatus(201))
});

module.exports = router;
