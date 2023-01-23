const { Schema, Types } = require("mongoose");
// Schema to create Friend model
const friendSchema = new Schema(
  {
    friendId: {
        type: String
      },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


module.exports = friendSchema;
