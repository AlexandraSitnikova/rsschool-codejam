function sumOfOther(arr) {
  const sum = arr.reduce((s, element) => s += element, 0);
  const res = arr.map(element => sum - element);

  return res;
}

module.exports = sumOfOther;