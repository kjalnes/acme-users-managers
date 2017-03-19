const router = require('express').Router();
const path = require('path');

// router.get('/', (req, res, next) => {
//     // res.send('hello')
//     res.sendFile(path.join(__dirname, 'index.html'))
// });

router.get('/testbtn', (req, res, next ) => {
    res.send('yup');
})


router.get('/api/users', (req, res, next ) => {
    // async call to get users from db
})


router.get('/api/managers', (req, res, next ) => {
    // async call to get managers from db
})



router.put('/api/users/:id', (req, res, next ) => {
    // async update to remove or add user as manager
})

// GET /api/users
    // GET /api/managers
    // PUT /api/users/:id


module.exports = router;
