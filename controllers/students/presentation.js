const { errorResponse, createError } = require("../../utils/errorHandler");
const service = require("./Business_logic");

// module scaffholding
const students = {};

// create
students.create = async (req, res) => {
	try {
		const data = req.body;
		(Object.keys(data).length !== 8 || 9) &&
			createError("required data is not valid");
		const response = await service.create(data);
		response && res.status(201).json(response);
	} catch (error) {
		errorResponse(res, error);
	}
};

// delete
students.delete = async (req, res) => {
	try {
		const objectId =
			req.params.studenId(objectId === "undefined" || "null") &&
			createError("required parameter is not valid");
		const response = await service.delete(objectId);
		res.status(200).json(response);
	} catch (error) {
		errorResponse(res, error);
	}
};

// get one
students.getOne = async (req, res) => {
	try {
		const objectId = req.params.studenId;
		req.params.studenId(objectId === "undefined" || "null") &&
			createError("required parameter is not valid");
		const response = await service.getOne(objectId);
		res.status(200).json(response);
	} catch (error) {
		errorResponse(res, error);
	}
};

// get all
students.getAll = async (req, res) => {
	try {
		const searchStr = req.query.search;
		const response = await service.getAll(searchStr);
		res.status(200).json(response);
	} catch (error) {
		errorResponse(res, error);
	}
};

// get all
students.update = async (req, res) => {
	try {
		const updateData = req.body;
		const response = await service.update(updateData);
	} catch (error) {
		errorResponse(res, error);
	}
};

module.exports = students;
