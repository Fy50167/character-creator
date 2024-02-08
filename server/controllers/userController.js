const { User, Character} = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find().select('-__v');

            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({
                _id: req.params.userId
            }).select('-__v');

            if (!user) {
                return res.status(404).json({
                    message: 'No users with that ID!'
                })
            }

            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          const token = signToken(user);
          res.json({ token, user });
        } catch (err) {
          res.status(500).json(err);
        }
    },

    async updateUser(req,res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
    
            if (!user) {
            res.status(404).json({ message: 'No user with this ID!' });
            }
    
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
          const user = await User.findOneAndDelete({ _id: req.params.userId });
    
          if (!user) {
            res.status(404).json({ message: 'No user with this ID!' });
          }
    
          await Character.deleteMany({ _id: { $in: user.characters } });

          res.json({ message: 'User and all associated characters deleted.' });
        } catch (err) {
          res.status(500).json(err);
        }
    },

    async login(req, res) {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(req.body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
}