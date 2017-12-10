const Sequelize=require('sequelize');

const db=new Sequelize('postgres://localhost:5432/seniorproject',{logging: false});

module.exports=db;

