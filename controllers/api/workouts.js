const router = require('express').Router();

const databaseUrl = "workouts";
const collections = ["notes"];

//const db = mongojs(databaseUrl, collections);

router.get('/', async (req, res) => {
    try{

    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{

    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;