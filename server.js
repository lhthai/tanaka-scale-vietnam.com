"use strict";

const express = require("express");
const app = new express();
const port = process.env.PORT || 3000;
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const i18n = require("i18n");
const dotenv = require('dotenv')
const routes = require('./routes/routes');
const productRoutes = require('./routes/products/indexRoutes');
const floorRoutes = require('./routes/products/floorRoutes');
const truckRoutes = require('./routes/products/truckRoutes');
const benchRoutes = require('./routes/products/benchRoutes');
const livestockRoutes = require('./routes/products/livestockRoutes')
const industrialRoutes = require('./routes/products/industrialRoutes');
const newsRoutes = require('./routes/news/indexRoutes');

dotenv.config();

//configure i18n
i18n.configure({
  locales: ['vi', 'en', 'jp'],
  defaultLocale: 'vi',
  directory: __dirname + "/locales",
  cookie: "i18n"
});

app.use(cookieParser("tanaka"));
app.use(
  session({
    secret: "tanaka-scale-vietnam",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

app.use(i18n.init);

// gzip compression middleware
app.use(compression());

// helmet middleware
app.use(helmet());

// ejs template middleware
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "/dist")));

// Configure routes
app.use("/", routes);
app.use('/products', productRoutes);
app.use('/products/floor-scales/', floorRoutes);
app.use('/products/truck-scales/', truckRoutes)
app.use('/products/bench-scales/', benchRoutes)
app.use('/products/livestock-scales/', livestockRoutes)
app.use('/products/industrial-scales/', industrialRoutes)
app.use('/news', newsRoutes);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err,
    i18n: res
  });
});


app.listen(port);