const { User, Character } = require('../models');


module.exports = {
    async getCharacters(req, res) {
        try {
            const character = await Character.find({
              class: req.params.class
            }).select('-__v');

            res.json(character);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleCharacter(req, res) {
        try {
            const character = await Character.findOne({
                _id: req.params.characterId
            }).select('-__v');

            if (!character) {
                return res.status(404).json({
                    message: 'No characters with that ID!'
                })
            }

            res.json(character)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createCharacter(req, res) {
        try {
          const character = await Character.create(req.body);

          const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { characters: character } },
            { runValidators: true, new: true }
          );

          res.json(character);
        } catch (err) {
          console.log('hit');
          res.status(500).json(err);
        }
    },

    async updateCharacter(req,res) {
        try {
            const character = await Character.findOneAndUpdate(
              { _id: req.params.characterId },
              { $set: req.body },
              { runValidators: true, new: true }
            );
    
            if (!character) {
              res.status(404).json({ message: 'No character with this ID!' });
            }
    
            res.json(character);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteCharacter(req, res) {
        try {
          const character = await Character.findOneAndDelete({ _id: req.params.characterId });
    
          if (!character) {
            res.status(404).json({ message: 'No character with this ID!' });
          }

          if (!req.body.userId) {
            res.status(404).json({ message: 'Please specify the user that this is being deleted from!' })
          }

          const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $pull: { characters: req.params.characterId } },
            { runValidators: true, new: true }
          );

          res.json({ message: 'Character has been deleted.' });
        } catch (err) {
          res.status(500).json(err);
        }
    },

}