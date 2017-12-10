// Students

// have profile info including:
// firstName - not empty or null
// lastName - not empty or null
// email - not empty or null; valid email
// gpa - decimal between 0.0 and 4.0
// must have a virtual 'name' field which is the concatenation of firstName and lastName
// must be assigned to a campus


const Sequelize=require('sequelize');
//const index=require('../index')
const db = require('../db');

const Students= db.define('students', {

	firstName:{
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName:{
		type: Sequelize.STRING,
		allowNull: false
	},
	email:{
		type: Sequelize.STRING,
		validate:{
			isEmail: true,
			notEmpty: true
		}
	},
	gpa:{
		type: Sequelize.FLOAT

	},
	name:{
		type: Sequelize.VIRTUAL,
		get(){
			return this.firstName + '' + this.lastName
		}

	}
	



})

module.exports= Students