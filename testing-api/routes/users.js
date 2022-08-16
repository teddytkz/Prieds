var express = require("express");
const userController = require("../controllers/userController");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

/** Get User */
router.get("/", userController.userFindAll);
router.get("/:id", userController.userFindById);

/** Create User */
router.post("/", userController.userCreate);

/** Update User */
router.put("/:id", userController.userUpdate);

/** Delete User */
router.delete("/:id", userController.userDelete);
router.delete("/", userController.userDeleteAll);

module.exports = router;
