import path from 'path';
import express from 'express';
import getAllMaps from 'get-all-maps';

export default class Server {
  constructor(params) {
    this.serverPort = params.port || 3000;
    this.app = express();
    this.server = null;
  }

  start() {
    this.server = this.app.listen(this.serverPort, '0.0.0.0');
    this.app.use(express.static(path.resolve(`${__dirname}/../frontend/`)));
    this.app.use(express.static(path.resolve(`${__dirname}/../unitybuild/`)));

    this.app.get('/api/maps/', (_req, res) => {
      getAllMaps().then(maps => res.send({ maps }));
    });
  }

  stop() {
    this.server.close();
    this.server = null;
  }
}
