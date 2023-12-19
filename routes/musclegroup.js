const { Router } = require('express')
const router = Router()
const { createmusclegroup, listMuscleGroups, editMuscleGroup } = require('../controllers/musclegroup')


router.post('/',
    createmusclegroup)

router.get('/',
    listMuscleGroups)

router.put('/:id',
    editMuscleGroup)


module.exports = router;