const express = require('express')
const router = new express.Router()

router.get("/pf9", (req, res, next) => {
    res.render("details/bench/pf9", { i18n: res });
});


module.exports = router