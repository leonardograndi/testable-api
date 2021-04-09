import { Application, Router } from "express";
import { readdirSync } from "fs";

export default (app: Application) => {
  const router = Router();
  readdirSync(`${__dirname}/../routes`).map(async (file) => {
    if (!file.endsWith(".map")) {
      const subRoute = file.split(".").slice(0, -1).join(".");
      app.use(`/api/${subRoute}`, router);
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
