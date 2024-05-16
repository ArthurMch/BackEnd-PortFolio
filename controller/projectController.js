const { Project } = require('../models/Project');


exports.findAllProject = (req, res) => {
    Project.find()
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

  exports.findOneProject = (req, res) => {
    Project.find({_id : req.params.id}).then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};