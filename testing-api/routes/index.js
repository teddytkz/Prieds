var express = require("express");
const queueController = require("../controllers/queueController");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/** Queue Router */
router.get("/queue", queueController.findQueue);
router.post("/queue", queueController.createQueue);

module.exports = router;
