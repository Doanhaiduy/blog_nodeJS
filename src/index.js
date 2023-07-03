const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const route = require("./routes");

const path = require("path");
const app = express();
const port = 3000;

// static
app.use(express.static(path.join(__dirname, "public")));

// use middleware => submit form method Post
app.use(
    express.urlencoded({
        extended: true,
    })
);

// use middleware => submit javascript method Post
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// template engine
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
