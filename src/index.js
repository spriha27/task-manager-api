const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/dev.env') });
const express = require('express');
require( './db/mongoose.js' )
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req, res) => {
  res.send(`Please visit <a href = "https://github.com/spriha27/task-manager-api">https://github.com/spriha27/task-manager-api</a> to find REST APIs that can be used on this project using Postman.`)
})

app.listen(port, () => {
    console.log("Server is up on port " + port);
})