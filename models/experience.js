import mongooose from "mongoose";

const experienceSchema = mongooose.Schema({
		_id: String,
		position: String,
		date: String,
		location: String,
		Description: String,
		company: String,
	},
    { collection: "experiences" }
);

const Experiences = mongooose.model("Experiences", experienceSchema);

export default Experiences;
