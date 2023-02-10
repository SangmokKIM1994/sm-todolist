const mongoose = require("mongoose");
mongoose.set('strictQuery',false)
const dotenv = require('dotenv');
dotenv.config();

const {mongoDb} = process.env

mongoose.connect(mongoDb,{useNewUrlParser: true,
                        useUnifiedTopology: true,})
    .then(value => console.log('몽고디비 연결'))
    .catch(reason => console.log('몽고디비 연결 실패'))


const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));

module.exports = db;
