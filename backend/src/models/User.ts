import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// Step 1: Define interface for a User Document
export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Step 2: Define the schema
const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Step 3: Hash the password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Step 4: Add comparePassword method
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Step 5: Create and export the model
const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
export default User;
