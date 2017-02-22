import * as express from 'express';
import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';

import {
  ServerConfig,
  CareerLocation,
  CareerType,
  PressItem,
  Job
} from "./interfaces";


const app: express.Application = express();

let config: ServerConfig = null;
if (fs.existsSync('config.json')) {
  let fileContent = fs.readFileSync('config.json', 'utf8');
  config = JSON.parse(fileContent);
} else {
  config = {
    databaseFile: 'server/db.sqlite',
    listeningPort: 3001,
    clientOrigin: 'http://localhost:8080'
  }
}

//CORS middleware
const allowCrossDomain = function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  res.header('Access-Control-Allow-Origin', config.clientOrigin);
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

  const allLocations: Array<CareerLocation> = [];
  const db: sqlite3.Database = new sqlite3.Database(config.databaseFile);

  db.each(
    `
      SELECT id, name
      FROM career_locations
    `,
    function(err: Error, row: any) {
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

  const careersTree: {[key: string]:Array<Job>} = {};
  const db: sqlite3.Database = new sqlite3.Database(config.databaseFile);

  const careerTypes: Array<CareerType> = [];

  db.each(
    `
      SELECT id, type
      FROM career_types
    `,
    function(err: Error, row: any) {
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
        function(err: Error, row: any) {
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


  const careersTree: {[key: string]:Array<Job>} = {};
  const db: sqlite3.Database = new sqlite3.Database(config.databaseFile);

  const careerTypes: Array<CareerType> = [];

  db.each(
    `
      SELECT id, type
      FROM career_types
    `,
    function(err: Error, row: any) {
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
        function(err: Error, row: any) {
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

  const allPressItems: Array<PressItem> = [];
  const db: sqlite3.Database = new sqlite3.Database(config.databaseFile);

  db.each(
    `
      SELECT id, title
      FROM press_releases
    `,
    function(err: Error, row: any) {
      allPressItems.push({
        id: row.id,
        title: row.title
      });
    },
    function() {
      db.close();

      res.send(allPressItems);
    }
  );

});

app.get('/press/:id', function (req: express.Request, res: express.Response) {

  const pressItem: PressItem = {
    title: '',
    content: ''
  };
  const db: sqlite3.Database = new sqlite3.Database(config.databaseFile);

  db.each(
    `
      SELECT title, content
      FROM press_releases
      WHERE id == ` + req.params.id,
    function(err: Error, row: any) {
      pressItem.title = row.title;
      pressItem.content = row.content;
    },
    function() {
      db.close();

      res.send(pressItem);
    }
  );

});

app.listen(config.listeningPort, function () {
  console.log('Example app listening on port ' + config.listeningPort);
});