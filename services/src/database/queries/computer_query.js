// ==========================================
// 1. STUDENTS QUERIES
// ==========================================
const CREATE_STUDENT = `INSERT INTO students ( grade_section_id, account_id, lastname, firstname, middlename, contact_no ) VALUES (?, ?, ?, ?, ?, ?) ;`;

const FIND_ALL_STUDENTS = `SELECT s.id AS student_id, s.grade_section_id, s.account_id, s.lastname, s.firstname, s.middlename, s.contact_no, s.created_at, s.updated_at FROM students AS s ORDER BY s.id DESC ;`;

const FIND_STUDENT_BY_ID = `SELECT s.id AS student_id, s.grade_section_id, s.account_id, s.lastname, s.firstname, s.middlename, s.contact_no, s.created_at, s.updated_at FROM students AS s WHERE s.id = ? ;`;

const UPDATE_STUDENT = `UPDATE students SET grade_section_id = ?, account_id = ?, lastname = ?, firstname = ?, middlename = ?, contact_no = ? WHERE id = ? ;`;

const DELETE_STUDENT = `DELETE FROM students WHERE id = ? ;`;

// ==========================================
// 2. GUIDANCE CONCERNS QUERIES
// ==========================================
const CREATE_GUIDANCE_CONCERN = `INSERT INTO guidance_concerns ( name, description, is_active ) VALUES (?, ?, ?) ;`;

const FIND_ALL_GUIDANCE_CONCERNS = `SELECT gc.id AS guidance_concern_id, gc.name, gc.description, gc.is_active, gc.created_at, gc.updated_at FROM guidance_concerns AS gc ORDER BY gc.id DESC ;`;

const FIND_GUIDANCE_CONCERN_BY_ID = `SELECT gc.id AS guidance_concern_id, gc.name, gc.description, gc.is_active, gc.created_at, gc.updated_at FROM guidance_concerns AS gc WHERE gc.id = ? ;`;

const UPDATE_GUIDANCE_CONCERN = `UPDATE guidance_concerns SET name = ?, description = ?, is_active = ? WHERE id = ? ;`;

const DELETE_GUIDANCE_CONCERN = `DELETE FROM guidance_concerns WHERE id = ? ;`;

// ==========================================
// 3. CASE RECORDS QUERIES
// ==========================================
const CREATE_CASE_RECORD = `INSERT INTO case_records ( student_id, concern_id, opened_by, opened_date, title, description, priority, status, closed_date, closing_remarks ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ;`;

const FIND_ALL_CASE_RECORDS = `SELECT cr.id AS case_record_id, cr.student_id, cr.concern_id, cr.opened_by, cr.opened_date, cr.title, cr.description, cr.priority, cr.status, cr.closed_date, cr.closing_remarks, cr.created_at, cr.updated_at FROM case_records AS cr ORDER BY cr.id DESC ;`;

const FIND_CASE_RECORD_BY_ID = `SELECT cr.id AS case_record_id, cr.student_id, cr.concern_id, cr.opened_by, cr.opened_date, cr.title, cr.description, cr.priority, cr.status, cr.closed_date, cr.closing_remarks, cr.created_at, cr.updated_at FROM case_records AS cr WHERE cr.id = ? ;`;

const UPDATE_CASE_RECORD = `UPDATE case_records SET student_id = ?, concern_id = ?, opened_by = ?, opened_date = ?, title = ?, description = ?, priority = ?, status = ?, closed_date = ?, closing_remarks = ? WHERE id = ? ;`;

const DELETE_CASE_RECORD = `DELETE FROM case_records WHERE id = ? ;`;

// ==========================================
// 4. GUIDANCE SESSIONS QUERIES
// ==========================================
const CREATE_GUIDANCE_SESSION = `INSERT INTO guidance_sessions ( case_record_id, staff_id, session_date, session_time, session_type, concern, discussion_summary, intervention, recommendation, follow_up_date, status ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ;`;

const FIND_ALL_GUIDANCE_SESSIONS = `SELECT gs.id AS guidance_session_id, gs.case_record_id, gs.staff_id, gs.session_date, gs.session_time, gs.session_type, gs.concern, gs.discussion_summary, gs.intervention, gs.recommendation, gs.follow_up_date, gs.status, gs.created_at, gs.updated_at FROM guidance_sessions AS gs ORDER BY gs.id DESC ;`;

const FIND_GUIDANCE_SESSION_BY_ID = `SELECT gs.id AS guidance_session_id, gs.case_record_id, gs.staff_id, gs.session_date, gs.session_time, gs.session_type, gs.concern, gs.discussion_summary, gs.intervention, gs.recommendation, gs.follow_up_date, gs.status, gs.created_at, gs.updated_at FROM guidance_sessions AS gs WHERE gs.id = ? ;`;

const UPDATE_GUIDANCE_SESSION = `UPDATE guidance_sessions SET case_record_id = ?, staff_id = ?, session_date = ?, session_time = ?, session_type = ?, concern = ?, discussion_summary = ?, intervention = ?, recommendation = ?, follow_up_date = ?, status = ? WHERE id = ? ;`;

const DELETE_GUIDANCE_SESSION = `DELETE FROM guidance_sessions WHERE id = ? ;`;

// ==========================================
// 5. GUIDANCE REPORTS QUERIES
// ==========================================
const CREATE_GUIDANCE_REPORT = `INSERT INTO guidance_reports ( staff_id, report_type, report_title, date_from, date_to ) VALUES (?, ?, ?, ?, ?) ;`;

const FIND_ALL_GUIDANCE_REPORTS = `SELECT gr.id AS guidance_report_id, gr.staff_id, gr.report_type, gr.report_title, gr.date_from, gr.date_to, gr.generated_at FROM guidance_reports AS gr ORDER BY gr.id DESC ;`;

const FIND_GUIDANCE_REPORT_BY_ID = `SELECT gr.id AS guidance_report_id, gr.staff_id, gr.report_type, gr.report_title, gr.date_from, gr.date_to, gr.generated_at FROM guidance_reports AS gr WHERE gr.id = ? ;`;

const UPDATE_GUIDANCE_REPORT = `UPDATE guidance_reports SET staff_id = ?, report_type = ?, report_title = ?, date_from = ?, date_to = ? WHERE id = ? ;`;

const DELETE_GUIDANCE_REPORT = `DELETE FROM guidance_reports WHERE id = ? ;`;

// ==========================================
// MODULE EXPORTS
// ==========================================
module.exports = {
  // Students
  CREATE_STUDENT,
  FIND_ALL_STUDENTS,
  FIND_STUDENT_BY_ID,
  UPDATE_STUDENT,
  DELETE_STUDENT,

  // Guidance Concerns
  CREATE_GUIDANCE_CONCERN,
  FIND_ALL_GUIDANCE_CONCERNS,
  FIND_GUIDANCE_CONCERN_BY_ID,
  UPDATE_GUIDANCE_CONCERN,
  DELETE_GUIDANCE_CONCERN,

  // Case Records
  CREATE_CASE_RECORD,
  FIND_ALL_CASE_RECORDS,
  FIND_CASE_RECORD_BY_ID,
  UPDATE_CASE_RECORD,
  DELETE_CASE_RECORD,

  // Guidance Sessions
  CREATE_GUIDANCE_SESSION,
  FIND_ALL_GUIDANCE_SESSIONS,
  FIND_GUIDANCE_SESSION_BY_ID,
  UPDATE_GUIDANCE_SESSION,
  DELETE_GUIDANCE_SESSION,

  // Guidance Reports
  CREATE_GUIDANCE_REPORT,
  FIND_ALL_GUIDANCE_REPORTS,
  FIND_GUIDANCE_REPORT_BY_ID,
  UPDATE_GUIDANCE_REPORT,
  DELETE_GUIDANCE_REPORT,
};
