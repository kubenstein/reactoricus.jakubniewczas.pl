import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import getAllMaps from 'get-all-maps';
import updateFinishedCounter from 'update-finished-counter';
import addMap from 'add-map';

export default class Server {
  constructor(params) {
    this.serverPort = params.port || 3000;
    this.app = express();
    this.app.use(bodyParser.json());
    this.server = null;
  }

  start() {
    this.server = this.app.listen(this.serverPort, '0.0.0.0');
    this.app.use(express.static(path.resolve(`${__dirname}/../frontend/`)));
    this.app.use(express.static(path.resolve(`${__dirname}/../unitybuild/`)));

    this.app.get('/api/maps/', (_req, res) => {
      getAllMaps().then(maps => res.send({ maps }));
    });

    this.app.post('/api/maps/', (req, res) => {
      const { name, coordinates } = req.body;
      addMap({ name, coordinates })
        .then(() => res.sendStatus(200))
        .catch(errors => res.status(422).send(errors));
    });

    this.app.patch('/api/maps/:id', (req, res) => {
      const { id } = req.params;
      updateFinishedCounter(id);
      res.sendStatus(200);
    });
  }

  stop() {
    this.server.close();
    this.server = null;
  }
}
