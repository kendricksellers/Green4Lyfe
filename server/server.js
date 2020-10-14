import bodyParser from 'body-parser';
import config from './config/config.js'
import { connectToDatabase } from './connectToMongoDB.js';
import userRouter from './routers/userModelRouter.js';
import express from 'express';
const app = express();

//connect to database
const db = connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
    );
db.once("open", () => {
    console.log("Successfully connected to mongoose database!");
});

app.use(bodyParser.urlencoded({ extended: true }));

// https://stackoverflow.com/questions/60425501/how-to-fetch-and-display-data-from-express-api-to-a-react-app
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/api/users/', userRouter);

const port = config.port;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});