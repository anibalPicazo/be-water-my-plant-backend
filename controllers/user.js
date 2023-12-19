const { response, request } = require("express")
const Usuario = require("../models/Usuario")
const brcypt = require('bcryptjs')
const { generarJWT } = require("../helpers/jwt")
const MuscleGroup = require("../models/MuscleGroup")



const listUsers = async (req, res = response) => {
    const users = await Usuario.find()
    res.status(200).json({
        ok: true,
        users
    })
}

const createUser = async (req, res = response) => {
    const user = new Usuario(req.body)
    try {
        const userSaved = await user.save()
        res.status(200).json({
            ok: true,
            user: userSaved
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }

}
const editUser = async (req, res = response) => {
    const exerciseId = req.params.id

    const newUser = {
        ...req.body,
    }

    try {
        const updateUser = await Usuario.findByIdAndUpdate(exerciseId, newUser, { new: true })

        res.status(200).json({
            ok: true,
            event: updateUser
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
    listUsers,
    createUser,
    editUser
}