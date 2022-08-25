import Task from '../models/task.js';
import passport from 'passport';
export const addTask = async (req, res) => {
	var task = new Task ({
		user_id:req.body.user_id,
		text:req.body.text,
		day:req.body.day,
		reminder: req.body.reminder,
		creation_dt: Date.now()
	  });
	
	  try {
		console.log(`Saving task => ${req.body.text}`);
		let doc = await task.save();
		return res.status(200).json(doc);
	  } catch(err) {
		console.error(err);
		return res.status(501).json(err);
	  }
};


export const getTasks = async (req, res) => {
	try {
		const {uid: userID} = req.params;

		const Tasks = await Task.find({user_id: userID})
	
		console.log(`Sending task for user ${userID} : ` , {Tasks})
	
		res.status(200).json(Tasks);
	} catch (error) {
		res.status(404).json({ message: error.message });
	 }

};

export const updateTask = async (req, res) => {
	try {
		const {id: task_id} = req.params;
		console.log(`Updating task with id ${task_id}`);

		const updatedTask = await Task.findOne( {_id:  task_id}, function(err, task) {
			task.reminder = !task.reminder;
			task.save();
		});
	
		
	
		res.status(200).json(updatedTask);
	} catch (error) {
		res.status(404).json({ message: error.message });
	 }

};

export const deleteTask = async (req, res) => {
	try {
		const{id: task_id} = req.params;

		console.log(`Deleting task with id ${task_id}`);

		const deleteTask = await Task.deleteOne({_id: task_id});

		res.status(200).json(deleteTask);
	} catch (err) { 
		res.status(404).json({ message: err.message });
	}
}