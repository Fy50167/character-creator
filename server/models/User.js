const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(email) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        },
        message: 'Please enter a valid email address!'
      }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    tagline: {
        type: String,
        required: true,
        default: 'This is your tagline.'
    },
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Character',
      },
    ]
  },
  {
    toJSON: {
      virtuals: false,
    },
    id: false,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;
