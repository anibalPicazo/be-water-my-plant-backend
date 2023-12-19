const { Router } = require('express')
const router = Router()
const { createWorkOut, assignWorkOutSet, getWorkoutByUser } = require('../controllers/workout');


router.post('/',
    createWorkOut)

router.post('/workoutset',
    assignWorkOutSet)

router.get('/:id',
    getWorkoutByUser)



module.exports = router;