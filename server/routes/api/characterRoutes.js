const router = require('express').Router();

const {
    getCharacters,
    getSingleCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} = require('../../controllers/characterController');

router.route('/').get(getCharacters).post(createCharacter);

router.route('/:characterId').get(getSingleCharacter).put(updateCharacter).delete(deleteCharacter);
   
module.exports = router;
