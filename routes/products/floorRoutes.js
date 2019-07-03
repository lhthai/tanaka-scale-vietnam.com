const express = require("express")
const router = new express.Router()

router.get("/tt", (req, res, next) => {
    res.render("details/floor/tt-type", { i18n: res });
});

router.get("/u-shaped", (req, res, next) => {
    res.render("details/floor/u-shaped", { i18n: res });
});

router.get("/ttl", (req, res, next) => {
    res.render("details/floor/ttl-type", { i18n: res });
});

router.get("/flexible-container", (req, res, next) => {
    res.render("details/floor/flexible-container", { i18n: res });
});

router.get("/tt-sus", (req, res, next) => {
    res.render("details/floor/tt-sus", { i18n: res });
});

router.get("/utt-2", (req, res, next) => {
    res.render("details/floor/utt-2", { i18n: res });
});

router.get("/twin-connect", (req, res, next) => {
    res.render("details/floor/twin-connect", { i18n: res });
});

router.get("/tt-bx", (req, res, next) => {
    res.render("details/floor/tt-bx", { i18n: res });
});

router.get("/tt-sbx", (req, res, next) => {
    res.render("details/floor/tt-sbx", { i18n: res });
});

router.get("/utt-2-sbx", (req, res, next) => {
    res.render("details/floor/utt-2-sbx", { i18n: res });
});

module.exports = router;