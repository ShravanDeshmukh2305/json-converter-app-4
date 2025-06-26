import mongoose from 'mongoose';

const JsonEntrySchema = new mongoose.Schema({
  content: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('JsonEntry', JsonEntrySchema);
