const express = require("express")
const router = new express.Router()


router.get("/floor-scales", (req, res, next) => {
    res.render("products/floor-scale", { i18n: res });
});

router.get("/truck-scales", (req, res, next) => {
    res.render("products/truck-scale", { i18n: res });
});

router.get("/bench-scales", (req, res, next) => {
    res.render("products/bench-scale", { i18n: res });
});

router.get("/livestock-scales", (req, res, next) => {
    res.render("products/livestock-scale", { i18n: res });
});

router.get("/industrial-scales", (req, res, next) => {
    res.render("products/industrial-scale", { i18n: res });
});

router.get("/maintenance-services", (req, res, next) => {
    res.render("products/maintenance-service", { i18n: res });
});

module.exports = router;