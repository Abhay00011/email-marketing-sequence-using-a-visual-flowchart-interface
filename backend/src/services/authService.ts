import jwt from 'jsonwebtoken';
import User from '../models/User';

export const registerUser = async (email: string, password: string) => {
  const user = new User({ email, password });
  await user.save();
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  return token;
};
