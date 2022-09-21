import User from "../models/User";

exports.getUsers = [
  async (req, res) => {
    try {
      const response = await User.findAll();
      res.status(200).json({ success: true, message: response });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error });
    }
  },
];
