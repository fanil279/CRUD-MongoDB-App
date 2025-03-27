const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routes/router");
const port = process.env.PORT || 3000;

const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");
const loggerHandler = require("./middleware/loggerHandler");

const app = express();
app.use(express.json());

app.use(loggerHandler);

app.set("view engine", "ejs");
app.set("views", "./views");

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Successfully connected to the database"))
    .catch(err => console.error(err));

app.get("/", (req, res) => {
    res.render("index",
                {title: "Homepage"}
              );
});

app.use("/api/users", router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Application is running at https://crud-mongodb-app-production.up.railway.app/`));