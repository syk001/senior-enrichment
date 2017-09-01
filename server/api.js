'use strict'
const api = require('express').Router()
const db = require('../db')
const { Campus, Student } = require('../db/models')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({hello: 'world'}))


api.get('/campuses', function (req, res, next) {
	Campus.findAll()
		.then(campuses => res.json(campuses))
		.catch(next)
})

api.get('/campuses/:campusId', function (req, res, next) {
	Campus.findById(req.params.campusId)
		.then(campus => res.json(campus))
		.catch(next);
})

api.post('/campuses/:campusId', function (req, res, next) {
	Campus.findOrCreate({ where: { id: req.params.campusId } })
		.spread(campus => {
			res.json(campus)
		})
		.catch(next)
})

api.put('/campuses/:campusId', function (req, res, next) {
	Campus.findById(req.params.campusId)
		.then(campus => campus.update(req.body))
		.catch(next);
});

api.delete('/campuses/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


api.get('/students', function (req, res, next) {
	Student.findAll()
		.then(students => res.json(students))
		.catch(next)
})

api.get('/students/:studentId', function (req, res, next) {
	Student.findById(req.params.studentId)
		.then(student => res.json(student))
		.catch(next)
})

api.post('/students/:studentId', function (req, res, next) {
	Student.findOrCreate({ where: { id: req.params.studentId } })
		.spread((student) => {
			res.json(student)
		})
		.catch(next)
})

api.put('/students/:studentId', function (req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body))
    .catch(next);
});

api.delete('/students/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


api.use((req, res, next) => {
  res.status(404).send('Not found');
});


module.exports = api;
