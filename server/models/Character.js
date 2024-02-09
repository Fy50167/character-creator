const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        class: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
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