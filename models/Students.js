const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var studentSchema = new mongoose.Schema(
	{
		studentId: {
			type: String,
			unique: true,
			required: true,
		},
		name: {
			type: String,
			required: true,
			index: true,
		},
		image: {
			type: String,
		},
		father: {
			name: { type: String, required: true },
			nid: { type: Number, required: true },
		},
		mother: {
			type: Object,
			properties: {
				name: { type: String, required: true },
				nid: { type: Number, required: true },
			},
		},
		email: {
			type: String,
			unique: true,
		},
		mobile: {
			type: String,
			required: true,
			unique: true,
		},
		class: {
			type: String,
			required: true,
		},
		dob: { type: Date },
	},
	{ timestamps: true }
);

studentSchema.pre('save', async function (next) {
	const Student = this.constructor;
	const lastStudent = await Student.findOne({}, {}, { sort: { 'studentId': -1 } });
	const nextId = lastStudent ? lastStudent.studentId + 1 : 1;
	this.studentId = nextId;
	next();
  });

//Export the model
module.exports = mongoose.model("Student", studentSchema);
