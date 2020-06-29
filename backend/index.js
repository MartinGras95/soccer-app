// imports
// 
// 
import express from "express";
import bodyparser from "body-parser";
// library which simplifies the connections to mongo and syntax
import mongoose from "mongoose";
import routes from "./routes/soccerRoutes";
import cors from "cors";

// create express app
const app = express();
// Port
const PORT = 4000;


// Mongo connection
// 
// 
mongoose.Promise = global.Promise;
// Connect to Database
mongoose.connect("mongodb://localhost/soccerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Body-parser setup
// 
// 
// This will allow to pass a request and encode it properly
// transpiles the code before we use it
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

// CORS setup
// 
// cross-origin resource sharing
// allows rescources to be requested from other domains
app.use(cors());

// send app to the routes 
// where the route endpoints will be executed
routes(app);


// Home route
app.get("/", (req, res) => 
    res.send(`Our soccer application is running on ${PORT}`)
);


// Run server
// 
// 
app.listen(PORT, () =>
    console.log(`Your soccer server is running on port ${PORT}`)
)
