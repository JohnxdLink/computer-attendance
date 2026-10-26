const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const staffService = require("../services/staff-service.js");

// CREATE - Register new staff
const createStaff = async (req, res) => {
  try {
    const { account_id, role_id, lastname, firstname, contact_no, email } = req.body;

    const result = await staffService.createStaff(account_id, role_id, lastname, firstname, contact_no, email);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Staff member created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all staff
const findAllStaffs = async (req, res) => {
  try {
    const staffs = await staffService.findAllStaffs();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: staffs,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get staff by ID
const findStaffById = async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await staffService.findStaffById(id);

    if (!staff) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: staff,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get staff by account ID
const findStaffByAccountId = async (req, res) => {
  try {
    const { account_id } = req.params;

    const staff = await staffService.findStaffByAccountId(account_id);

    if (!staff) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff record not found for this account.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: staff,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get staff by email
const findStaffByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const staff = await staffService.findStaffByEmail(email);

    if (!staff) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff record not found for this email.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: staff,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update staff by ID
const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { account_id, role_id, lastname, firstname, contact_no, email } = req.body;

    const result = await staffService.updateStaff(id, account_id, role_id, lastname, firstname, contact_no, email);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff record updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete staff by ID
const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await staffService.deleteStaff(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff record deleted successfully.",
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
  createStaff,
  findAllStaffs,
  findStaffById,
  findStaffByAccountId,
  findStaffByEmail,
  updateStaff,
  deleteStaff,
};
