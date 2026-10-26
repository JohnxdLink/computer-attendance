const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const computerService = require("../services/computers-service.js");

// CREATE - Register a new computer
const createComputer = async (req, res) => {
  try {
    const { pc_number, status } = req.body;

    const result = await computerService.createComputer(pc_number, status);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Computer registered successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all computers
const findAllComputers = async (req, res) => {
  try {
    const computers = await computerService.findAllComputers();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: computers,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get computer by ID
const findComputerById = async (req, res) => {
  try {
    const { id } = req.params;

    const computer = await computerService.findComputerById(id);

    if (!computer) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Computer not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: computer,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get computer by PC number
const findComputerByPcNumber = async (req, res) => {
  try {
    const { pc_number } = req.params;

    const computer = await computerService.findComputerByPcNumber(pc_number);

    if (!computer) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Computer not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: computer,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update computer details by ID
const updateComputer = async (req, res) => {
  try {
    const { id } = req.params;
    const { pc_number, status } = req.body;

    const result = await computerService.updateComputer(id, pc_number, status);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Computer updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete computer by ID
const deleteComputer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await computerService.deleteComputer(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Computer deleted successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createComputer,
  findAllComputers,
  findComputerById,
  findComputerByPcNumber,
  updateComputer,
  deleteComputer,
};
