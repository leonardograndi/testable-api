import express, { Application } from "express";

class App {
  app: Application;

  constructor() {
    this.app = express();
  }
}

export default new App().app;
