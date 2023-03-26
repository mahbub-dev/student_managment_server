const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var donationSchema = new mongoose.Schema({
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
		unique: true,
	},
	amount: { type: Number, required: true },
});

//Export the model
module.exports = mongoose.model("Donation", donationSchema);
