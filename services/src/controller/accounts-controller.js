const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const accountService = require("../services/accounts-service.js");

// CREATE - Register a new account
const createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await accountService.createAccount(username, password);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Account created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get all registered accounts
const findAllAccounts = async (req, res) => {
  try {
    const accounts = await accountService.findAllAccounts();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: accounts,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

// READ - Get account by ID
const findAccountById = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await accountService.findAccountById(id);

    if (!account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: ReasonPhrases.NOT_FOUND,
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: account,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// READ - Get account by username
const findAccountByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const account = await accountService.findAccountByUsername(username);

    if (!account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: ReasonPhrases.NOT_FOUND,
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      data: account,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// UPDATE - Update account by ID
const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const result = await accountService.updateAccount(id, username, password);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

// DELETE - Delete account by ID
const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await accountService.deleteAccount(id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account deleted successfully.",
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
  createAccount,
  findAllAccounts,
  findAccountById,
  findAccountByUsername,
  updateAccount,
  deleteAccount,
};
