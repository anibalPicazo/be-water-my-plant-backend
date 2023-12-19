const { Router } = require('express')
const router = Router()
const { listExercise, createExercise, editExercise } = require('../controllers/exercise')

router.get('/',
    listExercise)

router.post('/',
    createExercise)

router.put('/:id',
    editExercise)


module.exports = router;