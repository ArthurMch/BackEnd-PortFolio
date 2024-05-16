const project = require("../controller/projectController.js");

var router = require("express").Router();


router.get("/", project.findAllProject);
router.get("/:id", project.findOneProject);

module.exports = router;