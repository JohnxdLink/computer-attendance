const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const gradesectionController = require("../controller/grade_section-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", gradesectionController.createGradeSection);
router.get("/", gradesectionController.findAllGradeSections);
router.get("/school-year", gradesectionController.findGradeSectionsBySchoolYear);
router.get("/:id", gradesectionController.findGradeSectionById);
router.put("/:id", gradesectionController.updateGradeSection);
router.delete("/:id", gradesectionController.deleteGradeSection);

module.exports = router;
