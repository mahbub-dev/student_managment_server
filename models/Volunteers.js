const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var volunteerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			index: true,
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
		address: { type: String, required: true },
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model("Volunteer", volunteerSchema);
