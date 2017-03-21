const router = require('express').Router();
const path = require('path');
const db = require('./db')
const User = db.models.User;

router.get('/api/users', (req, res, next ) => {
    User.getUsers()
    .then( (users) => {
        res.send(users)
    })
});

router.get('/api/managers', (req, res, next ) => {
    User.getManagersAndEmployees()
    .then( (managers) => {
        res.send(managers)
    })
});

// promote, demote, add user / remove user from manager, change user's manager
router.put('/api/users/:id', (req, res, next ) => {
    const id = req.params.id;

    // if requestes is promote demote
    if(req.body.promoteOrDemote) {
        User.getUser(id)
        .then(user => {
            return user.changeManagerRole()
        })
        .then( (user) => {
            if(!user.isManager)  {
                return User.removeManagerIds(id)
            }
        })
        .then( () => res.sendStatus(201))
    }

    // if request is update relationships
    if(req.body.managerId || req.body.managerId === null) {
        User.getUser(id)
        .then( user => {
            return user.updateUsersManager(req.body.managerId)
        })
        .then( () => res.sendStatus(201))
    }
});

module.exports = router;
