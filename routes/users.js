const { Router } = require('express');
const { listUsers, createUser, editUser } = require('../controllers/user');
const router = Router()

//todo: Solo para usuarios admin
router.get('/',
    listUsers)

router.post('/',
    createUser)

router.put('/:id',
    editUser)



module.exports = router;