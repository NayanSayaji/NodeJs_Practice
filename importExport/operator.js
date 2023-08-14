const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

const name = "nayan";

// exporting single module
// module.exports = add;
// module.exports = name;

// exporting multiple modules
module.exports.add = add;
module.exports.sub = add;

// we can do this using object destructuring
// here the names of functions should be same i.e., add, sub, mul
module.exports = { add, sub, mul };
