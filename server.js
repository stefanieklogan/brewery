const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
require("dotenv").config();
const routes = require("./routes/");
// const mysql = require('mysql');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'develop2021!',
//   database: 'brewery'
// })

// connection.connect(err => {
//   if (err) {
//     return err;
//   }
// });

// Send every request to the React app
// Define any API routes before this runs
app.use(routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});