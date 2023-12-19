const { Schema, mongoose, model } = require('mongoose');

const MuscleGroupSchema = Schema({
    name: {
        required: true,
        type: String
    }
})
module.exports = model('MuscleGroup', MuscleGroupSchema)