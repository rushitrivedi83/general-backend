import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
		user_id: {type: String, require:true},
		text: {type: String, require:true},
		day: {type: String, require:true},
		reminder: {type: Boolean, require:true},
		creation_dt:{type:Date, require:true}


	},
    { collection: "Tasks" }
);

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
