const express = require("express");
const user = require("../controller/user");

const router = express.Router();

router.route("/users").get(user.getUsers);
router.route("/users/:id").get(user.getUserById);
router.route("/users").post(user.createUsers);
router.route("/users/:id").put(user.updateUsers);
router.route("/users").delete(user.deleteUsers);

module.exports = router;
