const { errorResponse, createError } = require('../../utils/errorHandler');
const service = require("./Business_logic");

// module scaffholding
const students = {};

// create
students.create = async (req, res) => {
	try {
		
	} catch (error) {
		errorResponse(res, error);
	}
};

// delete
students.delete = async (req, res) => {
	try {
	} catch (error) {
		errorResponse(res, error);
	}
};

// get one
students.getOne = async (req, res) => {
	try {
	} catch (error) {
		errorResponse(res, error);
	}
};

// get all
students.getAll = async (req, res) => {
	try {
		
	} catch (error) {
		errorResponse(res, error);
	}
};

// get all
students.update = async (req, res) => {
	try {
	} catch (error) {
		errorResponse(res, error);
	}
};

module.exports = students;
