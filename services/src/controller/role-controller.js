const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const roleService = require("../services/role-service.js");

// CREATE - Register a new role
const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    const result = await roleService.createRole(name, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Role created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all roles
const findAllRoles = async (req, res) => {
  try {
    const roles = await roleService.findAllRoles();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: roles,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get role by ID
const findRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    const role = await roleService.findRoleById(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      data: role,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get role by name
const findRoleByName = async (req, res) => {
  try {
    const { name } = req.params;

    const role = await roleService.findRoleByName(name);

    if (!role) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: role,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update role by ID
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const result = await roleService.updateRole(id, name, description);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete role by ID
const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await roleService.deleteRole(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role deleted successfully.",
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
  createRole,
  findAllRoles,
  findRoleById,
  findRoleByName,
  updateRole,
  deleteRole,
};
