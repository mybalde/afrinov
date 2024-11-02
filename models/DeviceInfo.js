// models/DeviceInfo.js
import mongoose from 'mongoose';

const DeviceInfoSchema = new mongoose.Schema({
  browser: String,
  platform: String,
  language: String,
  onlineStatus: String,
  screenResolution: String,
  colorDepth: Number,
  deviceMemory: String,
  hardwareConcurrency: String,
  cookieEnabled: Boolean,
  javaEnabled: Boolean,
  ip: Boolean,
  timezone: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.DeviceInfo || mongoose.model('DeviceInfo', DeviceInfoSchema);

