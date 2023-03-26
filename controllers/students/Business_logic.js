const { createError } = require("../../utils/errorHandler");
const validator = require("validator");
const database = require("./database");

// module scaffholding
const service = {};

// create
service.create = async (data) => {
	try {
		validator.isEmail(data.email.trim()) === false &&
			createError("email is not valid");
		const isPhoneUsed = await database.getAll(data.mobile);
		isPhoneUsed && createError("phone alread in use");
		const res = await database.create(data);
		!res && createError("something went wrong");
		return res;
	} catch (error) {
		throw error;
	}
};

// delete
service.delete = async (objectId) => {
	try {
		const deleteStudent = await database.delete(objectId);
		return deleteStudent;
	} catch (error) {
		throw error;
	}
};

// getOne
service.getOne = async (objectId) => {
	try {
		const getStudent = await database.getOne(objectId);
		!getStudent && createError("student not found");
		return getStudent;
	} catch (error) {
		throw error;
	}
};

// getAll
service.getAll = async (searchStr) => {
	try {
		const res = await database.getAll(searchStr);
		return res;
	} catch (error) {
		throw error;
	}
};

// update
service.update = async (updateData) => {
	try {
		Object.values(updateData).includes("studentId") &&
			createError("studentId cant be change");
		!Object.keys(updateData).length > 1 &&
			!Object.keys(updateData).length < 9 &&
			createError("provided data lenght is not valid");
		const res = await database.update(updateData);
		!res && createError("something went wrong", 500);
		return res;
	} catch (error) {
		throw error;
	}
};

module.exports = service;
