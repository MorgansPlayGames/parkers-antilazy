const router = require('express').Router();

const db = require('../../models');

// get all workouts 
router.get('/', (req, res) => {
    db.Workout.find({})
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/:id', async (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/range', async (req, res) => {
    try{

    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;