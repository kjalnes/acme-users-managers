const router = require('express').Router();
const path = require('path');
const db = require('./db')
// router.get('/', (req, res, next) => {
//     // res.send('hello')
//     res.sendFile(path.join(__dirname, 'index.html'))
// });

router.get('/testbtn', (req, res, next ) => {
    res.send('yup');
})


router.get('/api/users', (req, res, next ) => {
    // async call to get users from db
    // db.models.User.findAll()
    // .then( (users) => {
    //     res.send(users)
    // })
    db.models.User.findAll({ include: [
        {
            model: db.models.User,
            as: 'employees'
        }

    ]})
    .then( (users) => {
        console.log(users)
        res.send(users)
    })

})


router.get('/api/managers', (req, res, next ) => {
    // async call to get managers from db
    db.models.User.findAll({ include: [
        {
            model: db.models.User,
            as: 'employees'
        }

    ]})
    .then( (users) => {
        console.log(users)
        res.send(users)
    })

})



router.put('/api/users/:id', (req, res, next ) => {
    // async update to remove or add user as manager
})

// GET /api/users
    // GET /api/managers
    // PUT /api/users/:id


module.exports = router;
