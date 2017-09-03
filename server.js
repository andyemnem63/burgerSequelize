
// Dependencies
// =============================================================
let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require('method-override');


// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8080;

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Set Handlebars.
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================

require("./controllers/burger-controllers.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

