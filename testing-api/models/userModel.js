const { ObjectId } = require("mongodb");
const client = require("../config/database");

const db = client.db("hospitals");
const user = db.collection("user");

class User {
  static async create(input) {
    try {
      let documents = await user.insertOne(input);
      return documents;
    } catch (error) {
      return error;
    }
  }

  static async findAll() {
    try {
      const documents = await user.find({}).toArray();
      return documents;
    } catch (error) {
      return error;
    }
  }

  static async findById(id) {
    try {
      const documents = await user.findOne({
        _id: ObjectId(id),
      });
      return documents;
    } catch (error) {
      return error;
    }
  }

  static async update(id, input) {
    try {
      const updateDocument = await user.findOneAndUpdate(
        {
          _id: ObjectId(id),
        },
        {
          $set: input,
        }
      );
      return updateDocument;
    } catch (error) {
      return error;
    }
  }

  static async delete(id) {
    try {
      const deleteDocument = await user.findOneAndDelete({
        _id: ObjectId(id),
      });
      return deleteDocument;
    } catch (error) {
      return error;
    }
  }

  static async deleteAll() {
    try {
      const deleteAllDocument = await user.deleteMany({});
      return "Success Delete All Users";
    } catch (error) {
      return error;
    }
  }
}

module.exports = User;
