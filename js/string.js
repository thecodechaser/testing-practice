const stringLength = (string) => {
  const length = string.length;
  if (length < 1 || length > 10) {
    throw 'String does not met expectations';
  }
  return length;
};

const reverseString = (string) => {
  const array = [];
  const length = string.length - 1;

  for (let i = length; i >= 0; i -= 1) {
    array.push(string[i]);
  }

  return array.join('');
};

const capitalize = (string) => {
  const firstC = string[0].toUpperCase();
  return firstC + string.slice(1);
};

module.exports = { stringLength, reverseString, capitalize };
