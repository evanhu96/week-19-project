const { Schema, model } = require("mongoose");
const userSchema = require("./User");

// Schema to create User model
const thoughtSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: {
      type: Array,
    },
    // friendCount:
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
