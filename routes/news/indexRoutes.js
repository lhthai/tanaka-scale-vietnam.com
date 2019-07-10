const express = require('express')
const router = new express.Router();

// Main Pages Routes
router.get("/we-are-in-viv-asean-2019-at-bangkok", (req, res, next) => {
    res.render("news/we-are-in-viv-asean-2019-at-bangkok", { i18n: res });
});

router.get("/hand-over-signing-ceremony", (req, res, next) => {
    res.render("news/hand-over-signing-ceremony", { i18n: res });
});

module.exports = router