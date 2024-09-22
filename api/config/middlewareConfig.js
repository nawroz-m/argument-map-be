import express from "express";
import cors from "cors";

const middlewarConfig = (app) => {
  app.use(cors()); // enable cors
  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });
};
export default middlewarConfig;
