const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const WorkoutSchema = new Schema({

	day: {
		type: Date, 
		default: Date.now,
	},

	// exercises 
	exercises: [
		{
		  type:{
			  type: String,
			  trim: true,
			  required: `${this} is a required field.`
		  },
		  name: {
			type: String,
			trim: true,
			required: `${this} is a required field.`
		  },
		  duration: {
			  type: Number,
			  required: `${this} is a required field.`
		  },
		  weight: { type: Number },
		  reps: { type: Number },
		  sets: { type: Number },
		  distance: { type: Number },
		}
	  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;