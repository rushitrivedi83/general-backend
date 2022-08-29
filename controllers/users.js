import User from '../models/user.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
export const registerUser = async (req, res) => {
	const newPassword = await bcrypt.hash(req.body.password, 10)

	var user = new User ({
		email:req.body.email,
		username:req.body.username,
		password:newPassword,
		creation_dt: Date.now()
	  });
	
	  try {
		console.log(`Saving user ${req.body.username}`);
		let doc = await user.save();
		return res.status(200).json(doc);
	  } catch(err) {
		return res.status(501).json(err);
	  }
};

export const loginUser = async (req, res, next) => {
	console.log("Got a login req");
	passport.authenticate('local', function(err, user, info) {
		if (err) {return res.status(501).json(err); }
		if (!user) { return res.status(501).json(info); }
		req.logIn(user, function(err) {
		  if (err) { console.log(err); return res.status(501).json(err); }
		  return res.status(200).json({...user, message:'Login Success'});
		});
	  })(req, res, next);
}

export const user = async (req, res, next) => {
	return res.status(200).json(req.user);
}

export const isValidUser = function (req, res, next) {
	if(req.isAuthenticated()) next();
	else return res.status(401).json({message: 'Invalid Request'});
}

export const logout = function (req, res, next) {
	console.log("Logging out user");
	req.logout(function(err) {
		if (err) { return res.status(200).json({message: 'Logout Success'}); }
	  });
	return res.status(200).json({message: 'Logout Success'});
}