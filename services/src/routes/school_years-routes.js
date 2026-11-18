const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const schoolYearsController = require("../controller/school_years-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", schoolYearsController.createSchoolYear);
router.get("/", schoolYearsController.findAllSchoolYears);
router.get("/active", schoolYearsController.findActiveSchoolYear);
router.get("/:year", schoolYearsController.findSchoolYearByYear);
router.get("/:id", schoolYearsController.findSchoolYearById);
router.put("/:id", schoolYearsController.updateSchoolYear);
router.delete("/:id", schoolYearsController.deleteSchoolYear);

module.exports = router;
