const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false   
    },
    tagline: {
        type: String,
        required: true,
        default: 'This is your tagline.'
    },
    profilePicture: {
      type: String,
      required: true,
      default: `/stock-image.jpg`
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
