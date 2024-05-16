const hobbie = require("../controller/hobbieController.js");

var router = require("express").Router();


router.get("/:id", hobbie.findOneHobbie);

router.get("/", hobbie.findAllHobbies);

module.exports = router;