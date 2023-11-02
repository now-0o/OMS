const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, async () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
  })
  