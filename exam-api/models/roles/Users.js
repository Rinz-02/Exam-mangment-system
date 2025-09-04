const mongoose = require("mongoose");

const StudentsSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    batchNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model( "Students" , StudentsSchema);
module.exports = Users;
