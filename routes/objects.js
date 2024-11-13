const myController = require("../controllers/objects.js");
const router = require("express").Router();

router.get("/", myController.display);

module.exports = router;
