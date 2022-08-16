const User = require("../models/userModel");

class userController {
  static async userCreate(req, res, next) {
    try {
      console.log("Create User");
      const documents = await User.create(req.body);
      res.status(200).json(documents);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async userFindAll(req, res, next) {
    try {
      const documents = await User.findAll();
      return res.status(200).json(documents);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async userFindById(req, res, next) {
    try {
      const documents = await User.findById(req.params.id);
      return res.status(200).json(documents);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async userUpdate(req, res, next) {
    try {
      const updateDocument = await User.update(req.params.id, req.body);
      return res.status(200).json(updateDocument);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async userDelete(req, res, next) {
    try {
      const deleteDocument = await User.delete(req.params.id);
      return res.status(200).json(deleteDocument);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async userDeleteAll(req, res, next) {
    try {
      const deleteAllDocument = await User.deleteAll();
      return res.status(200).json(deleteAllDocument);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = userController;
