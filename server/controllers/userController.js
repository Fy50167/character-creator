const { User, Character} = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {

    async getSingleUser(req, res) {
        try {
            const userEmail = req.query.email;
            const user = await User.findOne({ email: userEmail }).select('-__v');
    
            if (!user) {
                return res.status(404).json({ message: `No user found with email ${userEmail}` });
            }
    
            res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    async createUser({ body }, res) {
        const user = await User.create(body);
    
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
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