import passport from "passport";
import LocalStrategy from 'passport-local';
import User from './models/user.js';
import bcrypt from 'bcrypt';

passport.use('local',new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},
    function (username, password, done) {
        User.findOne({ email: username }, async function (err, user) {
            if (err) { console.log(err); return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email address.' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });