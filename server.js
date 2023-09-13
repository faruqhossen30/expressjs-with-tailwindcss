const express = require("express");
const cors = require("cors");
const app = express();
var morgan = require('morgan')
const PORT = process.env.PORT || 5000;
const session = require("express-session");

require("dotenv").config();
//setting view engine to ejs
app.set("view engine", "ejs");

const corsOption = {
    origin: ['http://localhost:3000'],
};
const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    // cors(corsOption),

];
app.use(express.static(__dirname + '/public'));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(middleware);
app.use(morgan('combined'))

//route for index page
// /route for index page
app.get("/", function (req, res) {
  res.render("index");
});

// import routes
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
// const apiRoutes = require("./routes/api");
// const webRoutes = require("./routes/web");
// // defining routes
// app.use("/api/", webRoutes);
// app.use("/api/", apiRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
