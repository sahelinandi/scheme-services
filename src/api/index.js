import { version } from "../../package.json";
import { Router } from "express";
import userAuth from "./userAuth";
import saveApplication from "./saveApplication";

export default ({ config, db }) => {
  let api = Router();

  api.use("/scheme-services/v1", userAuth({ config, db }));
  api.use("/scheme-services/v1", saveApplication({ config, db }));
  // perhaps expose some API metadata at the root
  api.get("/", (req, res) => {
    res.json({ version });
  });

  return api;
};
