// backend/src/routes/catalogRoutes.js
const express    = require('express');
const controller = require('../controllers/catalogController');
const router     = express.Router();

router.get('/',           controller.getCategories);
router.get('/categories', controller.getCategories);
router.get('/stats',      controller.getCategoryStats);
router.get('/brands',     controller.getBrands);

module.exports = router;
