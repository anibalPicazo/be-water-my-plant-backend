const { Schema, mongoose, model } = require('mongoose');

const WorkOutSetSchema = Schema({
    name: {
        required: false,
        type: String
    },
    workout: {
        type: Schema.Types.ObjectId,
        ref: 'WorkOut',
        required: true
    },
    exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
    },
    series: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    }


})
module.exports = model('WorkOutSetSchema', WorkOutSetSchema)