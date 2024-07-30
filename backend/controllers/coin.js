// coinController.js
const User = require('../Model/user'); 

const coin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('points');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.status(200).json({
            success: true,
            points: user.points,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = coin;
