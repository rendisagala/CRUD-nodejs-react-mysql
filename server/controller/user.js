const User = require("../models/User");

exports.getUsers = [
  async (req, res) => {
    try {
      const response = await User.findAll();
      res.status(200).json({ success: true, message: response });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.getUserById = [
  async (req, res) => {
    try {
      const response = await User.findOne({ where: { id: req.params.id } });
      res.status(200).json({ success: true, message: response });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.createUsers = [
  async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).json({ success: true, message: "User Created" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.updateUsers = [
  async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ success: true, message: "User Updated" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.deleteUsers = [
  async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ success: true, message: "User Deleted" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    }
  },
];
