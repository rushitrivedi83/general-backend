import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
var Schema = mongoose.Schema;

var schema = new Schema({
    email : {type:String, require:true},
    username: {type:String, require:true},
    password:{type:String, require:true},
    creation_dt:{type:Date, require:true}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
export default mongoose.model('Users',schema);