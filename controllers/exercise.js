const { response, request } = require("express")
const Usuario = require("../models/Usuario")
const Exercise = require("../models/Exercise")
const brcypt = require('bcryptjs')
const { generarJWT } = require("../helpers/jwt")
// const crearUsuario = async (req,res = response) => {
//     const { email,password} = req.body


//     try {
//         let usuario =  await Usuario.findOne({email:email})

//         if(usuario){
//             return res.status(400).json({
//                 ok:false,
//                 msg:'El usuario ya existe',

//             })
//         }

//         usuario = new Usuario(req.body)

//         const salt = brcypt.genSaltSync()
//         usuario.password = brcypt.hashSync(password,salt)
//         let token =  await generarJWT(usuario.id, usuario.name)

//         await usuario.save()
//         res.status(201).json({
//             ok:true,
//             msg:'new',
//             token,
//             name: usuario.name,
//             uid: usuario.id

//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok:false,
//             msg:'Contacte con el admin',

//         })
//     }

// }
// const loginUsuario = async (req = request,res = response) => {
//     const { email, password} = req.body
//     try {
//         let usuario =  await Usuario.findOne({email:email})

//         if(!usuario){
//             return res.status(400).json({
//                 ok:false,
//                 msg:'El usuario no existe con ese email',

//             })
//         }
//         const validPass = brcypt.compareSync(password, usuario.password)
//         if (!validPass) {
//           return  res.status(500).json({
//                 ok:false,
//                 msg:'password incorrecta',

//             })
//         }
//         let token =  await generarJWT(usuario.id, usuario.name)
//         res.status(200).json({
//             ok:true,
//             msg:'login correcto',
//             uid: usuario.id,
//             name: usuario.name,
//             token
//         })

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             ok:false,
//             msg:'Contacte con el admin',

//         })
//     }




// }
// const renewUsuario = async (req,res = response) => {
//     const name = req.name
//     const uid = req.uid
//     let token =  await generarJWT(uid, name)
//     res.json({
//         ok:true,
//         msg:'renew',
//         token,
//         name,
//         uid
//     })
// }

const listExercise = async (req, res = response) => {
    const exercise = await Exercise.find().populate('muscleGroup')
    res.status(200).json({
        ok: true,
        exercise
    })
}
const createExercise = async (req, res = response) => {
    const exercise = new Exercise(req.body)
    try {
        const exerciseSaved = await exercise.save()
        res.status(200).json({
            ok: true,
            exercise: exerciseSaved
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error'
        })
    }

}
const editExercise = async (req, res = response) => {
    const exerciseId = req.params.id

    const newExercise = {
        ...req.body,
    }

    try {
        const updateExercise = await Exercise.findByIdAndUpdate(exerciseId, newExercise, { new: true })

        res.status(200).json({
            ok: true,
            event: updateExercise
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
    listExercise,
    createExercise,
    editExercise
}