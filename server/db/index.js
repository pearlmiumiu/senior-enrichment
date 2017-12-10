'use strict'
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');


console.log(chalk.yellow("Opening database connection"));

// create the database instance that can be used in other database files
// module.exports= new Sequelize('postgres://localhost:5432/seniorproject', {
//   logging: false, // so we don't see all the SQL query made
// });

// don't forget to run our models files and make all associations for our Sequelize objects (if you do it here consider circular references)
// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
// .then(() => {
//   console.log('db synced')
//   app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
// });

const db=require('./db');

require('./models');

module.exports=db;