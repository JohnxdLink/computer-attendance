const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const studentAttendanceService = require("../services/student_attendances-service.js");

// CREATE - Record new student attendance
const createStudentAttendance = async (req, res) => {
  try {
    const { student_id, computer_id, attendance_date, time_in, time_out, purpose } = req.body;

    const result = await studentAttendanceService.createStudentAttendance(
      student_id,
      computer_id,
      attendance_date,
      time_in,
      time_out,
      purpose,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Attendance record created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all attendance records
const findAllStudentAttendances = async (req, res) => {
  try {
    const attendances = await studentAttendanceService.findAllStudentAttendances();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: attendances,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get single attendance record by ID
const findStudentAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await studentAttendanceService.findStudentAttendanceById(id);

    if (!attendance) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Attendance record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all attendance records for a specific student ID
const findStudentAttendancesByStudentId = async (req, res) => {
  try {
    const { student_id } = req.params;

    const attendances = await studentAttendanceService.findStudentAttendancesByStudentId(student_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      data: attendances,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all attendance records for a specific computer ID
const findStudentAttendancesByComputerId = async (req, res) => {
  try {
    const { computer_id } = req.params;

    const attendances = await studentAttendanceService.findStudentAttendancesByComputerId(computer_id);

    return res.status(StatusCodes.OK).json({
      success: true,
      data: attendances,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update attendance record by ID
const updateStudentAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, computer_id, attendance_date, time_in, time_out, purpose } = req.body;

    const result = await studentAttendanceService.updateStudentAttendance(
      id,
      student_id,
      computer_id,
      attendance_date,
      time_in,
      time_out,
      purpose,
    );

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Attendance record updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete attendance record by ID
const deleteStudentAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await studentAttendanceService.deleteStudentAttendance(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Attendance record deleted successfully.",
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
  createStudentAttendance,
  findAllStudentAttendances,
  findStudentAttendanceById,
  findStudentAttendancesByStudentId,
  findStudentAttendancesByComputerId,
  updateStudentAttendance,
  deleteStudentAttendance,
};
