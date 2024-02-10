const router = require('express').Router();

const {
    getCharacters,
    getSingleCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} = require('../../controllers/characterController');

router.route('/').post(createCharacter);

router.route('/class/:currentClass').get(getCharacters);

router.route('/:characterId').get(getSingleCharacter).delete(deleteCharacter);
   
module.exports = router;