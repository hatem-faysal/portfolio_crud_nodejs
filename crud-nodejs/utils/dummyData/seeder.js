const fs = require('fs');
require('colors');
const dotenv = require('dotenv');
const Item = require('../../models/ItemModel');
const dbConnection = require('../../config/database');

dotenv.config({path:'../../config.env'});

//connect to DB
dbConnection();

//Read data
const category = JSON.parse(fs.readFileSync('./category.json'));

//Insert data into DB
const insertData = async () => {
    try{
      await Item.create(category);
      console.log('Data Inserted'.green.inverse);
      process.exit();
    } catch (error){
      console.log(error);
    };
}

//Delete data from DB
const destroyData = async () => {
    try{
      await Item.deleteMany();
      console.log('Data Destroyed'.red.inverse);
      process.exit();
    } catch (error){
      console.log(error);
    };
}

//need seeder.js
if(process.argv[2] === '-i'){
    insertData()
} else if(process.argv[2] === '-d') {
    destroyData();
}