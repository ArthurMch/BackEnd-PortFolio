const mongoose = require("mongoose");


const HobbieSchema = new mongoose.Schema({

    title_hob: {
        type: String,
        require: true,
    },

    description_hob: {
        type: String,
        require: true,
    },

    picture_hob: {
        type: String,
        require: false,
    }

});

const Hobbie = mongoose.model("Hobbie", HobbieSchema);

module.exports = { Hobbie }

