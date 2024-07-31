const User = require('../Model/user.js');

exports.buyPoints = async (req, res) => {
  const { buyPoints } = req.body;
  console.log(buyPoints);

  if (!buyPoints) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.points < buyPoints) {
      return res.status(400).json({ message: 'Insufficient points' });
    }

    // Deduct points
    user.points -= buyPoints;
    await user.save();

    res.status(200).json({ message: 'Investment successful', points: user.points });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
