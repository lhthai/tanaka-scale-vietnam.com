const express = require("express")
const router = new express.Router()

router.get("/la", (req, res, next) => {
    res.render("details/truck/la", { i18n: res });
});

router.get("/lb", (req, res, next) => {
    res.render("details/truck/lb", { i18n: res });
});

router.get("/pts-2", (req, res, next) => {
    res.render("details/truck/pts-2", { i18n: res });
});

router.get("/vts", (req, res, next) => {
    res.render("details/truck/vts", { i18n: res });
});

router.get("/uts", (req, res, next) => {
    res.render("details/truck/uts", { i18n: res });
});

router.get("/tt-ta", (req, res, next) => {
    res.render("details/truck/tt-ta", { i18n: res });
});

router.get("/ats-100", (req, res, next) => {
    res.render("details/truck/ats-100", { i18n: res });
});

module.exports=router;