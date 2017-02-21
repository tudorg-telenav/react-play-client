var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

var config = null;
if (fs.existsSync('server/config.json')) {
var fileContent = fs.readFileSync('server/config.json', 'utf8');
  config = JSON.parse(fileContent);
} else {
config = {
  db_file: 'server/db.sqlite'
}
}

if (!fs.existsSync(config.db_file)) {

  var db = new sqlite3.Database(config.db_file);

  db.serialize(function() {
    db.run('CREATE TABLE "career_locations" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT )');
    db.run('CREATE TABLE "career_types" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `type` TEXT )');
    db.run('CREATE TABLE "jobs" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `title` TEXT, `content` TEXT, `career_type_id` INTEGER, `career_location_id` INTEGER )');
    db.run('CREATE TABLE "press_releases" ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `title` TEXT, `content` TEXT )');

    db.run('');
  });
}