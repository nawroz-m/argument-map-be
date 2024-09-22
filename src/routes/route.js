import { getClaimJsonData } from "../controller/claimJsonController.js";
import express from "express";
const publicRouter = express.Router();
const PATH = {
  HOME: "",
};

/**
 * @api {GET} /
 * @desc Get the json data
 * @access Public
 */
publicRouter.get(PATH.HOME, getClaimJsonData);

export default publicRouter;
