const {} = require("mongodb");
const client = require("../config/database");

const db = client.db("hospitals");
const queue = db.collection("queue");

class Queue {
  static async create() {
    try {
      const date = new Date();
      const addQueue = await queue.insertOne({
        createdAt: date,
      });
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayVisitors = await queue.countDocuments({
        createdAt: {
          $gte: today,
        },
      });
      const prefix = todayVisitors < 10 ? "00" : todayVisitors < 100 ? "0" : "";
      const queueNumber = "A" + prefix + todayVisitors;
      const createdAt = date.toLocaleString("en-US", { hour12: true });

      const updateQueue = await queue.findOneAndUpdate(
        {
          _id: addQueue.insertedId,
        },
        {
          $set: {
            queueNumber: queueNumber,
          },
        }
      );

      return {
        addQueue,
        createdAt,
        queueNumber,
      };
    } catch (error) {
      return error;
    }
  }

  static async findAll() {
    try {
      const documents = await queue.find({}).toArray();
      return documents;
    } catch (error) {
      return error;
    }
  }
}

module.exports = Queue;
