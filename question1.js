function isNullOrEmpty(string) {
  // assume that given parameter can be a string or null but not a number
  return !string;
}

const input = "";
console.table([{ input: input, output: isNullOrEmpty(input) }]);

export default isNullOrEmpty;
