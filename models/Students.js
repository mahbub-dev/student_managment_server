const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		index: true,
	},
	image: {
		type: String,
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
	password: {
		type: String,
		required: true,
	},
});

//Export the model
module.exports = mongoose.model("Student", studentSchema);

