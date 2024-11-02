// pages/api/save-device-info.js
import dbConnect from '../../lib/mongodb';
import DeviceInfo from '../../models/DeviceInfo';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const deviceInfo = new DeviceInfo(req.body);
      await deviceInfo.save();
      res.status(200).json({ message: 'Information saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving information' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
