import * as express from 'express';
import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';


const app: express.Application = express();

let config = null;
if (fs.existsSync('config.json')) {
  let fileContent = fs.readFileSync('config.json', 'utf8');
  config = JSON.parse(fileContent);
} else {
  config = {
    db_file: 'server/db.sqlite',
    server_port: '3001',
    client_origin: 'http://localhost:8080'
  }
}

//CORS middleware
const allowCrossDomain = function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.header('Access-Control-Allow-Origin', config.client_origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

app.use(allowCrossDomain);

app.get('/careerLocations', function (req: express.Request, res: express.Response) {

  const allLocations = [];
  const db: sqlite3.Database = new sqlite3.Database(config.db_file);

  db.each(
    `
      SELECT id, name
      FROM career_locations
    `,
    function(err, row) {
      allLocations.push({
        id: row.id,
        name: row.name
      });
    },
    function() {
      db.close();

      res.send(allLocations);
    }
  );

});

app.get('/careers/', function (req: express.Request, res: express.Response) {

  const careersTree = {};
  const db: sqlite3.Database = new sqlite3.Database(config.db_file);

  const careerTypes = [];

  db.each(
    `
      SELECT id, type
      FROM career_types
    `,
    function(err, row) {
      careerTypes.push({
        id: row.id,
        type: row.type
      });
    },
    function() {

      for (let i = 0; i < careerTypes.length; i++) {

        const type = careerTypes[i].type;
        careersTree[type] = [];
      }

      db.each(
        `
          SELECT jobs.id, jobs.title, jobs.content, career_types.type
          FROM jobs
          JOIN career_types
          ON jobs.career_type_id = career_types.id
        `,
        function(err, row) {
          careersTree[row.type].push({
            id: row.id,
            title: row.title,
            content: row.content
          });
        },
        function() {
          db.close();

          res.send(careersTree);
        }
      );

    }
  );

});

app.get('/careers/:id', function (req: express.Request, res: express.Response) {


  const careersTree = {};
  const db: sqlite3.Database = new sqlite3.Database(config.db_file);

  const careerTypes = [];

  db.each(
    `
      SELECT id, type
      FROM career_types
    `,
    function(err, row) {
      careerTypes.push({
        id: row.id,
        type: row.type
      });
    },
    function() {

      for (let i = 0; i < careerTypes.length; i++) {

        const type = careerTypes[i].type;
        careersTree[type] = [];
      }

      db.each(
        `
          SELECT jobs.id, jobs.title, jobs.content, career_types.type
          FROM jobs
          JOIN career_types
          ON jobs.career_type_id = career_types.id
          JOIN career_locations
          ON jobs.career_location_id = career_locations.id
          WHERE career_locations.id == ` + req.params.id,
        function(err, row) {
          careersTree[row.type].push({
            id: row.id,
            title: row.title,
            content: row.content
          });
        },
        function() {
          db.close();

          res.send(careersTree);
        }
      );

    }
  );

});

app.get('/press', function (req: express.Request, res: express.Response) {

  const allPressItems = [];
  const db: sqlite3.Database = new sqlite3.Database(config.db_file);

  db.each(
    `
      SELECT id, title
      FROM press_releases
    `,
    function(err, row) {
      allPressItems.push({
        id: row.id,
        name: row.title
      });
    },
    function() {
      db.close();

      res.send(allPressItems);
    }
  );

});

app.get('/press/:id', function (req: express.Request, res: express.Response) {

  const pressItem: any = {};
  const db: sqlite3.Database = new sqlite3.Database(config.db_file);

  db.each(
    `
      SELECT title, content
      FROM press_releases
      WHERE id == ` + req.params.id,
    function(err, row) {
      pressItem.title = row.title;
      pressItem.content = row.content;
    },
    function() {
      db.close();

      res.send(pressItem);
    }
  );

});

app.listen(config.server_port, function () {
  console.log('Example app listening on port ' + config.server_port);
});