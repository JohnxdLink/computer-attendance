const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const computersController = require("../controller/computers-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", computersController.createComputer);
router.get("/:", computersController.findAllComputers);
router.get("/:id", computersController.findComputerById);
router.get("/pcnumber", computersController.findComputerByPcNumber);
router.put("/:id", computersController.updateComputer);
router.delete("/:id", computersController.deleteComputer);

module.exports = router;
