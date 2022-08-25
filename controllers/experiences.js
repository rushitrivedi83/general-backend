import Experience from "../models/experience.js";

export const getExperiences = async (req, res) => {
   try {
      // Get all of the experiences in the DB.
      const experiences = await Experience.find();

      console.log("Fetching all experiences from db:  ", { experiences });

      // Send an array of all the experiences.
      res.status(200).json(experiences);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};