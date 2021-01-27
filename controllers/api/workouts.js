const router = require('express').Router();

const db = require('../../models');

// get all workouts 
router.get('/', (req, res) => {
    db.Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// router.put('/:id', async (req, res) => {
//     const id = req.params.id
//     const body = req.body
//     db.Workout.findOneAndUpdate({ _id: id }, {$push:{ exercises: body}})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get('/range', async (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
  
    db.Workout.findOneAndUpdate(
      { id },
      { $push: { exercises: body } },
      { new: true },
    )
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

module.exports = router;