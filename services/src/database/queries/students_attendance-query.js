// ==========================================
// STUDENT ATTENDANCE QUERIES
// ==========================================

// CREATE - Record new attendance entry
const CREATE_STUDENT_ATTENDANCE = `INSERT INTO student_attendances (student_id, date, time_in, time_out, status, remarks) VALUES (?, ?, ?, ?, ?, ?)`;

// READ - Get all attendance records (ordered newest first)
const FIND_ALL_STUDENT_ATTENDANCES = `SELECT sa.id AS attendance_id, sa.student_id, sa.date, sa.time_in, sa.time_out, sa.status, sa.remarks, sa.created_at, sa.updated_at FROM student_attendances AS sa ORDER BY sa.id DESC`;

// READ - Get attendance record by ID
const FIND_STUDENT_ATTENDANCE_BY_ID = `SELECT sa.id AS attendance_id, sa.student_id, sa.date, sa.time_in, sa.time_out, sa.status, sa.remarks, sa.created_at, sa.updated_at FROM student_attendances AS sa WHERE sa.id = ?`;

// READ - Get all attendance records for a specific student
const FIND_ATTENDANCE_BY_STUDENT_ID = `SELECT sa.id AS attendance_id, sa.student_id, sa.date, sa.time_in, sa.time_out, sa.status, sa.remarks, sa.created_at, sa.updated_at FROM student_attendances AS sa WHERE sa.student_id = ? ORDER BY sa.date DESC, sa.time_in DESC`;

// READ - Get attendance records for a student on a specific date
const FIND_STUDENT_ATTENDANCE_BY_DATE = `SELECT sa.id AS attendance_id, sa.student_id, sa.date, sa.time_in, sa.time_out, sa.status, sa.remarks, sa.created_at, sa.updated_at FROM student_attendances AS sa WHERE sa.student_id = ? AND sa.date = ?`;

// READ - Get attendance records within a date range (for reporting)
const FIND_ATTENDANCE_BY_DATE_RANGE = `SELECT sa.id AS attendance_id, sa.student_id, sa.date, sa.time_in, sa.time_out, sa.status, sa.remarks, sa.created_at, sa.updated_at FROM student_attendances AS sa WHERE sa.date BETWEEN ? AND ? ORDER BY sa.date DESC`;

// UPDATE - Update an existing attendance record
const UPDATE_STUDENT_ATTENDANCE = `UPDATE student_attendances SET student_id = ?, date = ?, time_in = ?, time_out = ?, status = ?, remarks = ? WHERE id = ?`;

// UPDATE - Update time_out specifically upon checkout
const RECORD_STUDENT_TIMEOUT = `UPDATE student_attendances SET time_out = ? WHERE id = ?`;

// DELETE - Delete an attendance record
const DELETE_STUDENT_ATTENDANCE = `DELETE FROM student_attendances WHERE id = ?`;

// ==========================================
// MODULE EXPORTS
// ==========================================
module.exports = {
  CREATE_STUDENT_ATTENDANCE,
  FIND_ALL_STUDENT_ATTENDANCES,
  FIND_STUDENT_ATTENDANCE_BY_ID,
  FIND_ATTENDANCE_BY_STUDENT_ID,
  FIND_STUDENT_ATTENDANCE_BY_DATE,
  FIND_ATTENDANCE_BY_DATE_RANGE,
  UPDATE_STUDENT_ATTENDANCE,
  RECORD_STUDENT_TIMEOUT,
  DELETE_STUDENT_ATTENDANCE,
};
