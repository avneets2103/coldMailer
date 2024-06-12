import express from "express";

const app = express();
app.use(express.json({
    limit: "16kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express.static("public"));

// user route
import userRouter from './user.route.js';
app.use("/users", userRouter);

export {app}