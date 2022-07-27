const mongoose = require("mongoose");

module.exports = () => {
	const DB = 'mongodb+srv://pushkal:freakhacker4@xenontemp.u7yzg.mongodb.net/?retryWrites=true&w=majority'
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};