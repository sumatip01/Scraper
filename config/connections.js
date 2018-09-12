var mongoose = require("mongoose");

// Local Database Configuration with Mongoose
// mongoose.connect("mongodb://localhost/goodnews", function(error)
// 	{if(error) throw error;
// 	console.log("Database connected");
// });
// mLab database
mongoose.connect("mongodb://heroku_e9180907-a152-4088-9773-20391ebea138", function(err) {
	if(err) throw err;
	console.log('database connected');
});