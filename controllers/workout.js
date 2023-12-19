const { response, request } = require("express")
const Usuario = require("../models/Usuario")
const Exercise = require("../models/Exercise")
const brcypt = require('bcryptjs')
const { generarJWT } = require("../helpers/jwt")
const Workout = require("../models/Workout")
const WorkOutSet = require("../models/WorkOutSet")



const createWorkOut = async (req, res = response) => {
    const mg = new Workout(req.body)
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
const editWorkOut = async (req, res = response) => {
    const workoutId = req.params.id
    console.log(workoutId);
    const workout = Workout.findById(workoutId)
    const uid = req.uid
    console.log(workout);

    const newWorkout = {
        ...req.body,
        user: uid
    }

    try {
        const updateWorkout = await Workout.findByIdAndUpdate(workoutId, newWorkout, { new: true })

        res.status(200).json({
            ok: true,
            event: updateWorkout
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }

}
const getWorkoutById = async (req, res = response) => {
    const workoutId = req.params.id
    let workout = await Workout.findById(workoutId)

    const workoutSets = await WorkOutSet.find({ workout: workout.id })
    workout = { ...workout.toObject(), workoutSets }
    res.status(200).json({
        ok: true,
        workout
    })
}
const getWorkoutByUser = async (req, res = response) => {
    const userId = req.params.id
    console.log(userId);
    let workout = await Workout.findOne({ assignedUser: userId })
    if (workout) {
        const workoutSets = await WorkOutSet.find({ workout: workout.id })
        workout = { ...workout.toObject(), workoutSets }
        res.status(200).json({
            ok: true,
            workout
        })
    }
    else {
        res.status(500).json({
            ok: false,
            workout
        })
    }

}
const assignWorkOutSet = async (req, res = response) => {
    const mg = new WorkOutSet(req.body)
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

module.exports = {
    createWorkOut, editWorkOut, assignWorkOutSet, getWorkoutById, getWorkoutByUser
}