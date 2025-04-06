import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  to: String,
  subject: String,
  text: String,
  sendAt: Date
});

export default mongoose.model('Job', JobSchema);
