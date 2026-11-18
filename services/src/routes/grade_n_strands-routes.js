const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const grade_n_strandController = require("../controller/grade_n_strands-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", grade_n_strandController.createGradeNStrand);
router.get("/", grade_n_strandController.findAllGradeNStrands);
router.get("/:id", grade_n_strandController.findGradeNStrandById);
router.get("/gradeNStrand", grade_n_strandController.findGradeNStrand);
router.put("/:", grade_n_strandController.updateGradeNStrand);
router.delete("/:id", grade_n_strandController.deleteGradeNStrand);

module.exports = router;
