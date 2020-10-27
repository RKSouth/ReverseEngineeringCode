'use strict';
// include modules that exist in separate files - passport, models and passport local
var fs        = require('fs');
// The Path module provides a way of working with directories and file paths.
var path      = require('path');
//we are building are sql from here not from the workbench so we need to sequelize
var Sequelize = require('sequelize');
//basename 	returns the last part of a path- so return the last file name of the module
var basename  = path.basename(module.filename);
//we are using the node environment and the development section of the package.json
var env       = process.env.NODE_ENV || 'development';
//sets config equal to the directory name + the config.json contents and use that environment as an array?
var config    = require(__dirname + '/../config/config.json')[env];
// our database now exists as an object
var db        = {};

//build a new database (sql) of either our process environment or our "basic" data depends on whether we are going from our too or database
//ie whether we are passing information from the environment or to the user
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// The method returns an array with all the file names or objects in the directory. 
//The options argument can be used to change the format in which the files are returned from the method.
fs
  .readdirSync(__dirname)
  //filter says only these things selected - when it's not zero, when the file name is not the basname(current file ) and that it ends in js
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  //for every individual file that is sequelized, join (link together) the directory name and file and set it equal to model
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
//every single model file is then keyed into the exports Object
    db[model.name] = model;
  });
// for every modelname in the object keys of the database(db) run all of their associates (things that they work with) IF they have them
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//export both instances of the database as sequelize and Sequelize and allows us to assume our directory structure of the model file
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//export your database
module.exports = db;
