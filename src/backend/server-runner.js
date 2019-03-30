import Server from './server';

new Server({
  port: process.env.PORT,
}).start();
