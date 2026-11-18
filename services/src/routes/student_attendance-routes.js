const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const studentsattendanceController = require("../controller/students-attendance.js");

const router = Router();

router.use(authenticate);

router.post("/", studentsattendanceController.createStudentAttendancee);
router.get("/", studentsattendanceController.findAllStudentAttendance);
router.get("/:id", studentsattendanceController.findStudentAttendanceById);
router.get("/studentid", studentsattendanceController.findStudentAttendancesByStudentId);
router.get("/:computerid", studentsattendanceController.findStudentAttendancesByComputerId);
router.put("/:id", studentsattendanceController.updateStudentAttendance);
router.delete("/:id", studentsattendanceController.deleteStudentAttendance);

module.exports = router;
