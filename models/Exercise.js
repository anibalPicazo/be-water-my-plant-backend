const { Schema, mongoose, model } = require('mongoose');

const ExerciseSchema = Schema({
    name: {
        required: true,
        type: String
    },
    muscleGroup: {
        type: Schema.Types.ObjectId,
        ref: 'MuscleGroup',
        required: true
    }

})
module.exports = model('Exercise', ExerciseSchema)