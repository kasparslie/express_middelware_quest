const express = require('express');
const appRouter = express.Router();


appRouter.get("/superMiddleware", (req, res, next) => {
    console.log('hello middleware')
    next()

},function (req, res, next) {
        res.send('Hello World')
  });


  module.exports=appRouter;