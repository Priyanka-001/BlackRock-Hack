const User = require('../Model/user.js');

exports.sellPoints = async (req, res) => {
  const { sellPoints } = req.body;

  if (!sellPoints) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    // Deduct points
    user.points += sellPoints;
    await user.save();
    console.log('sell');
    res.status(200).json({ message: 'Investment successful', points: user.points });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
