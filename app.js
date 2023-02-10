const express = require('express');

const db = require('./models/index.js')
const todoRouter = require('./routes/todos.router.js');

const app = express();

// router.get('/', (req,res) => {
//     res.send('Hi');
// })
app.use('/api',express.json(), todoRouter);
app.use(express.static('./assets'))

app.listen(8080, () => {
    console.log("서버가 열릿다.")
})