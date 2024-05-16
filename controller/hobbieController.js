const { Hobbie } = require('../models/Hobbie');

// Retrieve all Hobbies //
exports.findAllHobbies = (req, res) => {
    Hobbie.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single Hobbie with an id //
exports.findOneHobbie = (req, res) => {
    Hobbie.find({_id : req.params.id}).then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
