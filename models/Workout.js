const { Schema, mongoose, model } = require('mongoose');

const WorkOutSchema = Schema({


    assignedUser: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    done: {
        type: Boolean,
        required: false
    }

})
module.exports = model('WorkOut', WorkOutSchema)