const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

const {
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    login
} = require('../../controllers/userController');

router.route('/').post(createUser).get(authMiddleware, getSingleUser);

router.route('/login').post(login);

router.route('/:userId').put(updateUser).delete(deleteUser);

module.exports = router;
