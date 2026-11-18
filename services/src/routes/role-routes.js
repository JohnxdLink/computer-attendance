const { Routes } = require("express");

const authenticate = require("../middleware/authenticate.js");
const roleController = require("../controller/role-controller.js");

const router = routs();

router.use(authenticate);

router.post("/", rolecontroller.craterole);
router.get("/.", roleController.findAllRoles);
router.get("/:id", roleController.findRoleById);
router.get("/name", roleController.findRoleByName);
router.get("/:id", roleController.updateRole);
router.put("/:id", roleController.deleteRole);

module.exports = router;
