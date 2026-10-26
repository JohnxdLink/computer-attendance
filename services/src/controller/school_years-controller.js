const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const schoolYearService = require("../services/school_years-service.js");

// CREATE - Register a new school year
const createSchoolYear = async (req, res) => {
  try {
    const { staff_id, school_year, start_date, end_date, is_active } = req.body;

    const result = await schoolYearService.createSchoolYear(staff_id, school_year, start_date, end_date, is_active);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "School year created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all school years
const findAllSchoolYears = async (req, res) => {
  try {
    const schoolYears = await schoolYearService.findAllSchoolYears();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: schoolYears,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get active school year
const findActiveSchoolYear = async (req, res) => {
  try {
    const activeSchoolYear = await schoolYearService.findActiveSchoolYear();

    if (!activeSchoolYear) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "No active school year set.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: activeSchoolYear,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get school year by ID
const findSchoolYearById = async (req, res) => {
  try {
    const { id } = req.params;

    const schoolYear = await schoolYearService.findSchoolYearById(id);

    if (!schoolYear) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: schoolYear,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get school year by year string (e.g. "2025-2026")
const findSchoolYearByYear = async (req, res) => {
  try {
    const { school_year } = req.params;

    const record = await schoolYearService.findSchoolYearByYear(school_year);

    if (!record) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: record,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update school year by ID
const updateSchoolYear = async (req, res) => {
  try {
    const { id } = req.params;
    const { staff_id, school_year, start_date, end_date, is_active } = req.body;

    const result = await schoolYearService.updateSchoolYear(id, staff_id, school_year, start_date, end_date, is_active);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found or no changes made.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School year updated successfully.",
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete school year by ID
const deleteSchoolYear = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await schoolYearService.deleteSchoolYear(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "School year not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "School year deleted successfully.",
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createSchoolYear,
  findAllSchoolYears,
  findActiveSchoolYear,
  findSchoolYearById,
  findSchoolYearByYear,
  updateSchoolYear,
  deleteSchoolYear,
};
