const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Investor!");
});

const userRouter = require('./Routes/userRouter');

app.use('/user', userRouter);


app.listen(port, () => {
    console.log('Server listening on port : ' + port);
});