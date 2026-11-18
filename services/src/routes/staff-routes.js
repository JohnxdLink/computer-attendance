const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const staffController = require("../controller/staff-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", staffController.createStaff);
router.get("/:", staffController.findAllStaff);
router.get("/:id", staffController.findStaffById);
router.get("/accoundid", staffController.findStaffByAccountId);
router.get("/email", staffController.findStaffByEmail);
router.put("/:id", staffController.updateStaff);
router.delete("/:id", staffController.deleteStaff);

module.exports = router;
