module.exports = function getZerosCount(number) {
  // your implementation
  index = 0;
  while (number > 0) {
    if (number > 1) {
      number /= 5;
      index += Math.floor(number);
    } else {
      break;
    }
  }
  return index;
}
