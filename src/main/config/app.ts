import express, { Application } from "express";
import initRoutes from "./routes";

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.setupApp(this.app);
  }

  setupApp(core: Application) {
    initRoutes(core);
  }
}

export default new App().app;
