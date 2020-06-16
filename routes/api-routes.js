const router = require("express").Router()
const Workout = requice("../models/exercise")

router.post("/api/workouts", (req,res) =>{
    Workout.create({})
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", ({body,params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}}
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts", (req,res) => {
    Workout.find()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get("/api/workouts/range", (req,res)=>{
    Workout.find({}).limit(7)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router