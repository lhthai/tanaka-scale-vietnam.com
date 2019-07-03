const express = require('express')
const router = new express.Router()

router.get("/hand-pallet", (req, res, next) => {
    res.render("details/industrial/hand-pallet", { i18n: res });
});

router.get("/belt-scale", (req, res, next) => {
    res.render("details/industrial/belt-scale", { i18n: res });
});

router.get("/caston", (req, res, next) => {
    res.render("details/industrial/caston", { i18n: res });
});

router.get("/dfs", (req, res, next) => {
    res.render("details/industrial/dfs", { i18n: res });
});

router.get("/digi-pallet", (req, res, next) => {
    res.render("details/industrial/digi-pallet", { i18n: res });
});

router.get("/drs", (req, res, next) => {
    res.render("details/industrial/drs", { i18n: res });
});

router.get("/fis2", (req, res, next) => {
    res.render("details/industrial/fis2", { i18n: res });
});

router.get("/tfm", (req, res, next) => {
    res.render("details/industrial/tfm", { i18n: res });
});

module.exports = router