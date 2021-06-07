const router = require("express").Router();
const Workout = require("../models/workoutSchema.js");

router.get('/workouts', (req, res) => {
  Workout.find({})
    .then(workout => {
      res.send(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post('/workouts', ({ data }, res) => {
  Workout.create(data)
    .then(workout => {
      res.send(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/workouts/:id', (req, res) => {
  // console.log(req.body);
  Workout.updateOne({
    _id: req.params.id,
  },
    {
      $push: {
        exercises: req.body,
      },
    })
    .then(exercise => {
      res.send(exercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $limit: 7,
    },
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    }
  ])
    .then(workouts => {
      res.send(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
