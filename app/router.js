const {Router} = require('express');
const generateController = require('./controller/generate');

const router = Router();

router.get('/generate', generateController.generate);

module.exports = router;