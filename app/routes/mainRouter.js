const express = require('express');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

function createMainRouter() {
    const mainRouter = express.Router();

    mainRouter.use(`/user`, userRouter);
    mainRouter.use(`/auth`, authRouter);

    return mainRouter;
}

module.exports = { createMainRouter };
