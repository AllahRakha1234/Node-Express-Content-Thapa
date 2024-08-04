// *** 12) MODULES IN NODE.JS  ***
const videoNo = 12;

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// Correct way to export multiple properties
// module.exports = { add, sub, videoNo };

// Another correct way to do it (but not recommended)(We can write any name at place of porperty name)
module.exports.add = add;
module.exports.sub = sub;
module.exports.videoNo = videoNo;
