import mongooose from "mongoose";

const projectSchema = mongooose.Schema({
		_id: String,
		name: String,
		Description: String,
		image: String,
		github: String,
		livelink: String,
	},
    { collection: "projects" }
);

const Projects = mongooose.model("Projects", projectSchema);

export default Projects;
