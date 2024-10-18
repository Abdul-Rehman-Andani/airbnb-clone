// models/Account.js
import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  access_token: { type: String },
  refresh_token: { type: String },
  expires_at: { type: Number },
});

export default mongoose.models.Account || mongoose.model('Account', AccountSchema);
