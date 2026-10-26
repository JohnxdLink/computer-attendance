const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const gradeNStrandService = require("../services/grade_n_strands-service.js");

// CREATE - Add a new grade level and strand combination
const createGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandService.createGradeNStrand(grade_level, strand, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Grade level and strand created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all grade level and strand records
const findAllGradeNStrands = async (req, res) => {
  try {
    const gradeNStrands = await gradeNStrandService.findAllGradeNStrands();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: gradeNStrands,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get grade and strand by ID
const findGradeNStrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const gradeNStrand = await gradeNStrandService.findGradeNStrandById(id);

    if (!gradeNStrand) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: gradeNStrand,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Search grade level and strand by query parameters
const findGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand } = req.query;

    const gradeNStrand = await gradeNStrandService.findGradeNStrand(grade_level, strand);

    if (!gradeNStrand) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade level and strand combination not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: gradeNStrand,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update grade level and strand by ID
const updateGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandService.updateGradeNStrand(id, grade_level, strand, description);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Remove grade level and strand by ID
const deleteGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandService.deleteGradeNStrand(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade level and strand deleted successfully.",
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
  createGradeNStrand,
  findAllGradeNStrands,
  findGradeNStrandById,
  findGradeNStrand,
  updateGradeNStrand,
  deleteGradeNStrand,
};
