// import * as bcrypt from "bcrypt-nodejs";
// import * as crypto from "crypto";
import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string; 
  password: string; 
};

export const UserSchema = new mongoose.Schema({
  name: {type:String,unique: true},
  password: String,
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;