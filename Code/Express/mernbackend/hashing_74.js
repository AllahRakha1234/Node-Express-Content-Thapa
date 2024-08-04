// *** 74) BCRYPT MODULE *** (It is used to hash the password) (It uses brypt.hash() and bcrypt.compare() methods)

const bcrypt = require("bcrypt");

const hashingFunciton = async (pswd) => {
  const hashedPswd = await bcrypt.hash(pswd, 10); // 10 is the number of rounds
  console.log(hashedPswd);
};

const validationFunction = async (pswd) => {
  const hashedValueInDb =
    "$2b$10$2KLR2RmnVQDWgnjzlqw2o.4/q8NHmJFhaEu5lHs5/rkwMwbJTnuYm";
  const result = await bcrypt.compare(pswd, hashedValueInDb); // 10 is the number of rounds
  console.log(result);
};

// hashingFunciton("12345");
validationFunction("12345");
