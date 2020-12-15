const express = require("express");
const app = express();
const port = 3002;
const appRouter = require('./routes/index');
app.use('/', appRouter)








app.listen(port, () => {
    console.log(`Server is runing on 3002`);
  });