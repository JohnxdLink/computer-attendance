const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const studentsController = require("../controller/students-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", studentsController.createStudentAttendancee);
router.get("/", studentsController.findAllStudentAttendance);
router.get("/:id", studentsController.findStudentAttendanceById);
router.get("/studentid", studentsController.findStudentAttendancesByStudentId);
router.get("/:computerid", studentsController.findStudentAttendancesByComputerId);
router.put("/:id", studentsController.updateStudentAttendance);
router.delete("/:id", studentsController.deleteStudentAttendance);

module.exports = router;
