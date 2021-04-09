import express, { Application } from 'express';
import initRoutes from './routes';

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.setupApp();
  }

  setupApp() {
    initRoutes(this.app);
  }
}

export default new App().app;
