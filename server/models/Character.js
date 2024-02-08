const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1,
            trim: true
        },
        class: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxLength: 250,
            default: 'Give your character a description.',
            minLength: 1
        },
        createdDate: {
            type: Date,
            default: Date.now,
            get: (date) => {
                formattedDate = date.toDateString();
                return formattedDate
            }
        },
        creator: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const Character = model('character', characterSchema);

module.exports = Character;