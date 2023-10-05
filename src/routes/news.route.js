const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewController')

router.use('/:slug', newsController.details)
router.use('/', newsController.index)

module.exports = router