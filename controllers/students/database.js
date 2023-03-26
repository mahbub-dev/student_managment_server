const { createError } = require("../../utils/errorHandler");
const Students = require("../../models/Students");
// module scaffholding
const database = {};

// create
database.create = async (data) => {
	try {
		const student = new Students(data);
		const res = await student.save();
		return res;
	} catch (error) {
		throw error;
	}
};

// delete
database.delete = async (objectId) => {
	try {
		const data = await Students.findByIdAndDelete(objectId);
		return data;
	} catch (error) {
		throw error;
	}
};

// getOne
database.getOne = async (objectId) => {
	try {
		const res = await Students.findById(objectId);
		return res;
	} catch (error) {
		throw error;
	}
};

// getAll
database.getAll = async (searchStr) => {
	try {
		if (searchStr) {
			const res = await Students.find({
				$or: [
					{ mobile: searchStr },
					{ name: searchStr },
					{ class: searchStr },
					{ studentId: searchStr },
				],
			});
			return res;
		} else {
			return await Students.find();
		}
	} catch (error) {
		throw error;
	}
};

// update
database.update = async (objectId, data) => {
	try {
		const res = await Students.findByIdAndUpdate(objectId, data);
		return res;
	} catch (error) {
		throw error;
	}
};

module.exports = database;
