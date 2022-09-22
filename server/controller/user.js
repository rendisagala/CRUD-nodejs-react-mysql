const User = require("../models/User");

exports.getUsers = [
  async (req, res) => {
    try {
      const response = await User.findAll();
      return res.status(200).json({ success: true, message: response });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.getUserById = [
  async (req, res) => {
    try {
      const response = await User.findOne({ where: { id: req.params.id } });
      if (!response)
        return res
          .status(400)
          .json({ success: false, message: "User Doesnt Exist" });

      return res.status(200).json({ success: true, message: response });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.createUsers = [
  async (req, res) => {
    try {
      const usernameExist = await User.findOne({
        where: { name: req.body.name },
      });
      const emailExist = await User.findOne({
        where: { email: req.body.email },
      });
      if (usernameExist || emailExist)
        return res
          .status(400)
          .json({ success: false, message: "Username or Email already Exist" });
      if (!req.body.name || !req.body.email || !req.body.gender)
        return res
          .status(400)
          .json({ success: false, message: "Please Fill Out All The Field" });
      await User.create(req.body);
      return res.status(201).json({ success: true, message: "User Created" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.updateUsers = [
  async (req, res) => {
    try {
      const userExist = await User.findOne({ where: { id: req.params.id } });
      if (!userExist)
        return res
          .status(400)
          .json({ success: false, message: "User Doesn`t Exist" });
      if (!req.body)
        return res.status(400).json({
          success: false,
          message: "Please Fill Out The Field You Want To Update",
        });
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ success: true, message: "User Updated" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
  },
];

exports.deleteUsers = [
  async (req, res) => {
    try {
      const userExist = await User.findOne({ where: { id: req.params.id } });
      if (!userExist)
        return res
          .status(400)
          .json({ success: false, message: "User Doesnt Exist" });

      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ success: true, message: "User Deleted" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
  },
];
