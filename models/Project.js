const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    title_pro: {
        type: String,
        require: true,
    },

    description_pro: {
        type: String,
        require: true,
    },

    picture_pro: {
        // L'url de mes assets pictures - path // 
        type: String,
        require: false,
    },

    lien_pro: {
        // url du lien git ou du projet si en ligne //
        type: String,
        require: true,
    }

});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = { Project };
