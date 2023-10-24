// const mongoose = require("mongoose");

// const uniqueValidator = require("mongoose-unique-validator");
// const userShema = mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   passwordC: { type: String, required: true }
// });

// userShema.plugin(uniqueValidator);

// module.exports = mongoose.model("User", userShema);


const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

const Users = mongoose.model("User", userSchema);

module.exports = Users;

