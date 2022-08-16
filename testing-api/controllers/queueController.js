const Queue = require("../models/queueModel");

class queueController {
  static async createQueue(req, res, next) {
    try {
      const documents = await Queue.create();
      return res.status(200).json(documents);
    } catch (error) {}
  }

  static async findQueue(req, res, next) {
    try {
      const documents = await Queue.findAll();
      return res.status(200).json(documents);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = queueController;
