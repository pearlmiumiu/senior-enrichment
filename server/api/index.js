'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const {Campuses, Students} = require('../db/models')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello:'world!'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

// GET
// - all campuses
// - a campus by id
// - all students
// - a student by id

apiRouter.get('/campuses', (req, res, next)=>{
	Campuses.findAll()
			.then(results=>{
				res.json(results)
			})
			.catch(next)
})

apiRouter.get('/campuses/:id',(req, res, next)=>{
	Campuses.findById(req.params.id)
			.then(found=>res.json(found))
			.catch(next)
})

apiRouter.get('/students', (req, res, next)=>{
	Students.findAll()
			.then(results=>res.json(results))
			.catch(next)
})

apiRouter.get('/students/:id',(req, res, next)=>{
	Students.findById(req.params.id)
			.then(found=>res.json(found))
			.catch(next)

})

// POST
// - new campus
// - new student
apiRouter.post('/campuses',(req, res, next)=>{
	Campuses.create(req.body)
			.then(createdCampus=>{
				res.json(createdCampus)
			})
			.catch(next)
})

apiRouter.post('/students', (req, res, next)=>{
	Students.create(req.body)
			.then(createdStudent=>{
				res.json(createdStudent)
			})
			.catch(next)
})



// PUT
// - updated student info for one student
// - updated campus info for one campus
apiRouter.put('/students/:id', (req, res, next)=>{
	Students.update(req.body,{
		where:{id:req.params.id},
		returning: true
	})
	.then(results=>{
		res.json(results[1][0])
	})
	.catch(next)
})

apiRouter.put('/campuses/:id', (req, res, next)=>{
	Students.update(req.body,{
		where:{id:req.params.id},
		returning: true
	})
	.then(results=>{
		res.json(results[1][0])
	})
	.catch(next)
})


// DELETE
// - a campus
// - a student
apiRouter.delete('/campuses/:id', (req, res, next)=>{
	Campuses.destroy({where:{id:req.params.id}})
			.then(()=>res.status(204).end())

})

apiRouter.delete('/students/:id', (req, res, next)=>{
	Students.destroy({where:{id:req.params.id}})
			.then(()=>res.status(204).end())

})




module.exports = apiRouter;