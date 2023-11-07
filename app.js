const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
const indexRouter = require('./routes/index');

const HttpException = require('./HttpException');
const asyncHandler = require('./utils/asyncHandler');

app.use('/', indexRouter);

app.listen(port, async () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
  })

app.use((err, req, res, next) => {
  console.log(err);
  if(err instanceof HttpException){
    res.status(err.status).send(err.message);
    return;
  }
  res.status(500).send({
    message : "서버에러입니다."
  })
})