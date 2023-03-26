const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var paymentSchema = new mongoose.Schema(
	{
		studentId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Student",
		},
		payment: [
			{
				paidFor: { type: String, required: true },
				paidBy: { name: String, phone: String },
				receivedBy: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
				},
				amounts: { type: Number, required: true },
				paidAt: { type: Number, default: Date.now() },
			},
		],
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model("Payment", paymentSchema);
