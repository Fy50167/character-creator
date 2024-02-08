const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/profile', userRoutes);
router.use('/character', characterRoutes);

module.exports = router;
