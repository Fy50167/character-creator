const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

const {
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    login
} = require('../../controllers/userController');

router.route('/').post(createUser).get(authMiddleware, getSingleUser).put(updateUser).delete(deleteUser);

router.route('/login').post(login);

module.exports = router;
