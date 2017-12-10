// have profile info including:
// name - not empty or null
// imageUrl - default value
// description - extremely large text
// can have many students assigned (may have none)


const Sequelize=require('sequelize');
//const index=require('./index')
const db = require('../db');

const Campuses= db.define('campuses', {
	name:{
		type: Sequelize.STRING,
		allowNull: false,
		validate:{
			notEmpty: false
		}
	},
	imageUrl:{
		type: Sequelize.STRING,
		defaultValue: '123@gmail.com'
	},
	description:{
		type: Sequelize.TEXT

	}

	
})

module.exports=Campuses