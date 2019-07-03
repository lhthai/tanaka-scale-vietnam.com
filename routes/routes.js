const express = require('express')
const router = new express.Router();
const path = require("path");

// Main Pages Routes
router.get("/", (req, res, next) => {
    res.render("index", { i18n: res });
});

// i18n Handling langluages
router.get("/en", (req, res, next) => {
    res.cookie("i18n", "en");
    res.redirect("/");
});

router.get("/vi", (req, res, next) => {
    res.cookie("i18n", "vi");
    res.redirect("/");
});

router.get("/jp", (req, res, next) => {
    res.cookie("i18n", "jp");
    res.redirect("/");
});

// About us Routes
router.get("/about", (req, res, next) => {
    res.render("about", { i18n: res });
});

router.get("/our-history", (req, res, next) => {
    res.render("history", { i18n: res });
});

// About us Routes
router.get("/products", (req, res, next) => {
    res.render("product", { i18n: res });
});

// About us Routes
router.get("/news", (req, res, next) => {
    res.render("news", { i18n: res });
});

// About us Routes
router.get("/contact", (req, res, next) => {
    res.render("contact", { i18n: res });
});

// Adding sitemap for google crawler
router.get('/sitemap', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/', 'sitemap.xml'));
});

module.exports = router;