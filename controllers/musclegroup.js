const { response, request } = require("express")
const Usuario = require("../models/Usuario")
const Exercise = require("../models/Exercise")
const brcypt = require('bcryptjs')
const { generarJWT } = require("../helpers/jwt")
const MuscleGroup = require("../models/MuscleGroup")



const createmusclegroup = async (req, res = response) => {
    const mg = new MuscleGroup(req.body)
    try {
        const mgSaved = await mg.save()
        res.status(200).json({
            ok: true,
            mg: mgSaved
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }

}
const editMuscleGroup = async (req, res = response) => {
    const muscleGroupId = req.params.id

    const newMuscleGroup = {
        ...req.body,
    }

    try {
        const updateMuscleGroup = await MuscleGroup.findByIdAndUpdate(muscleGroupId, newMuscleGroup, { new: true })

        res.status(200).json({
            ok: true,
            event: updateMuscleGroup
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }

}
const listMuscleGroups = async (req, res = response) => {
    const muscleGroups = await MuscleGroup.find()
    res.status(200).json({
        ok: true,
        muscleGroups
    })
}
module.exports = {
    createmusclegroup, listMuscleGroups, editMuscleGroup
}