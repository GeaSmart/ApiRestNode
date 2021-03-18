const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const data = require('../movies.json');

//Movies
router.get('/', (req, res) => {
    res.json(data);
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = data.length + 1;
        const newMovie = { ...req.body, id };
        data.push(newMovie);
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        _.each(data, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(data, (movie, i) => {
        if (movie.id == id) {
            data.splice(i, 1);
        }
    });
    res.send(data);
})

module.exports = router;