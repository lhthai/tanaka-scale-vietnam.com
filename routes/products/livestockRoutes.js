const express = require('express')
const router = new express.Router()

router.get('/dg-210', (req, res, next) => {
    res.render('details/livestock/dg-210', { i18n: res })
})

router.get('/dg-1100', (req, res, next) => {
    res.render('details/livestock/dg-1100', { i18n: res })
})

module.exports = router