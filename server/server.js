require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

require('./config/mongoose.config')(process.env.DB_NAME);
require('./routes/user.routes')(app);

app.listen(process.env.DB_PORT, () => console.log('Listening on port' + process.env.DB_PORT));