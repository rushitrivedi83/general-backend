import Project from "../models/project.js";

export const getProjects = async (req, res) => {
   try {
      // Get all of the projects in the DB.
      const projects = await Project.find();

      console.log("Fetching all projects from db:  ", { projects });

      // Send an array of all the projects.
      res.status(200).json(projects);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};