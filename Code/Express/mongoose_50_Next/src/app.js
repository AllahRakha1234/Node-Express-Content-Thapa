// *** 51,52,53,54)MONGGOSE *** (It's a ODM for MongoDB) (ODM: Object Data Modeling) (It's a library that helps us to interact with MongoDB) (It also known as a framework for MongoDB and Node.js)

const express = require("express");
const mongoose = require("mongoose");

// Connecting to MongoDB
mongoose
  .connect("mongodb://localhost:27017/thapa")
  .then(() => {
    console.log("Server is connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Creating a Schema (It defines structure, default values and validators of the document/row) (Always use camel case for the names of the Schema BECAUSE THEY ARE OBJECT/INSTANCE)(Schema cab ne like Below)
// const schema = new mongoose.Schema({
//   name: String,,
//   email:  String,,
//   active: Boolean,
// });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

// Creating a Model/Collection (It's a wrapper around the schema which provides the interface for the CRUD operations) (Model name should be singular and with first letter capatal. It will automatically convert it to plural and lowercase)(IT IS CAPITAL AND SINGULAR BECUASE IT IS A CLASS)
const User = mongoose.model("User", userSchema);

/////////////////////////
// Creating a Document/Row
// const ali = new User({
//   name: "Ali",
//   email: "ali@gmail.com",
//   active: true,
// });

// ali.save();
/////////////////////////

// Other way to do above using async-await

// const createDocument = async () => {
//   try {
//     const asad = new User({
//       name: "Asad",
//       email: "asad@gmail.com",
//       active: true,
//     });

//     const afaq = new User({
//       name: "Afaq",
//       email: "afaq@gmail.com",
//       active: true,
//     });

//     const haider = new User({
//       name: "Haider",
//       email: "haider@gmail.com",
//       active: true,
//     });

//     // const result = await User.save(); // To save use the instance
//     const result = await User.insertMany([asad, afaq, haider]); // To insert use the User Model
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// createDocument();

// *** 54) READING THE DOCUMENT***

// const getUsers = async () => {
//   try {
//     // const usersData = await User.find();
//     // const usersData = await User.find({ active: true }).limit(1).skip(1);
//     const usersData = await User.find({ email: "ali@gmail.com" });
//     console.log(usersData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUsers();

// *** 55) COMPARISON OPERATOR *** (To use comparison operator we need to use $ sign before the operator) (It inclueds $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin) ($in is used to find the value in the array if it matches the values in the array then it will return the result) ($nin is used to find the value in the array if it does not matches the values in the array then it will return the result

// const getUsers = async () => {
//   try {
//     // const usersData = await User.find({ active: { $eq: true } });
//     const usersData = await User.find({ name: { $in: ["Ali", "Asad"] } });
//     console.log(usersData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUsers();

// ** 56) LOGICAL OPERATOR *** (These are used to combine multiple conditions) ($and, $or, $nor, $not) (It is used to find the data which matches the multiple conditions)
// const getUsers = async () => {
//   try {
//     const usersData = await User.find({
//       $and: [{ name: "Ali" }, { email: "ahmad123@gmail.com" }],
//     });
//     console.log(usersData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUsers();

// ** 57) SORTING AND COUNT QUERY ***
// const getUsers = async () => {
//   try {
//     // const usersData = await User.find({}).countDocuments();
//     // const usersData = await User.find({}).sort({ name: 1 });
//     const usersData = await User.find({}).sort({ name: -1 });
//     console.log(usersData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUsers();

// ** 58) UPDATING DOUCUMENT ***
// const updateUsers = async () => {
//   try {
//     // const usersData = await User.updateOne(
//     //   { name: "Haider" },
//     //   { $set: { name: "Zaid", email: "zaid@gmail.com" } }
//     // );
//     // SECOND METHOD WHICH ALSO RETURN THE UPDATED DATA
//     const usersData = await User.findByIdAndUpdate(
//       { _id: "66855d9955c7e0849c53bf82" },
//       { $set: { name: "Zahid", email: "zahid@gmail.com" } }
//     );
//     console.log(usersData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// // updateUsers();

// ** 59) DELETING DOUCUMENT ***
// const deleteUsers = async (_id) => {
//   try {
//     // const usersData = await User.deleteOne({ _id: _id });
//     // SECOND METHOD WHICH ALSO RETURN THE UPDATED DATA
//     const usersData = await User.findByIdAndDelete({ _id });
//     console.log(usersData);
//   } catch (error) {
//     console.log(error);
//   }
// };
// deleteUsers("66857f52987642f50a644c7a");

// ** 60) MONGOOSE BUILT-IN VALIDATION *** (It includes trim, lowercase, uppercaase, required, min, max, match, enum, validate) (It is used to validate the data before saving it to the database)

// const tempSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     lowercase: true,
//     minlength: [5, "Name must be greater than 5 characters"], // It will show the error message if the name is less than 5 characters
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     uppercase: true,
//   },
//   active: {
//     type: Boolean,
//     default: true,
//   },
//   age: {
//     type: Number,
//     min: 18,
//     max: 65,
//   },
//   role: {
//     type: String,
//     enum: ["admin", "user", "superadmin"],
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   education: {
//     type: String,
//     validate(value) {
//       if (value.length < 5) {
//         throw new Error("Education must be greater than 5 characters");
//       }
//     },
//   },
//   path: {
//     type: String,
//     match: "/abc/",
//   },
// });

// ** 60) CRATING CUSTOM VALIDATION *** (It is used to create custom validation for the data) (It is used to validate the data before saving it to the database) (EXample)
// const temp1Schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     lowercase: true,
//     minlength: [5, "Name must be greater than 5 characters"], // It will show the error message if the name is less than 5 characters
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     uppercase: true,
//   },
//   active: {
//     type: Boolean,
//     default: true,
//   },
//   age: {
//     type: Number,
//     min: 18,
//     max: 65,
//   },
//   role: {
//     type: String,
//     enum: ["admin", "user", "superadmin"],
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   education: {
//     type: String,
//     validate(value) {
//       if (value.length < 5) {
//         throw new Error("Education must be greater than 5 characters");
//       }
//     },
//   },

// INSTRUCTION (Mongoose Middleware) :::
// In Mongoose, the schema.pre method is used to define middleware functions that run at specific points in the lifecycle of a Mongoose document. Middleware functions can be used to perform actions before or after certain events, such as validating, saving, or removing documents.

// The pre method allows you to specify a function to run before a given event. Common events where pre middleware is used include save, validate, remove, updateOne, deleteOne, findOneAndUpdate, etc.

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   username: String,
//   password: String,
//   createdAt: Date
// });

// // This function will run before a document is saved
// userSchema.pre('save', function(next) {
//   // 'this' refers to the document being saved
//   this.createdAt = new Date();
//   next(); // Proceed to save the document
// });

// const User = mongoose.model('User', userSchema);

// // Example of creating a new user
// const newUser = new User({
//   username: 'johndoe',
//   password: 'password123'
// });

// newUser.save()
//   .then(() => console.log('User saved'))
//   .catch(err => console.log('Error:', err));

// In the example above:

// userSchema.pre('save', function(next) { ... }): This middleware runs before saving a document. It sets the createdAt field to the current date.
// next(): This function is called to proceed to the next middleware or to save the document if there are no other middleware functions.
