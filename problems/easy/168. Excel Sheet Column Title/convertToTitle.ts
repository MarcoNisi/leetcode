const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const convertToTitle = (columnNumber: number): string => {
  let c = columnNumber
  let result: string = ''
  while (c > letters.length) {
    const r = c % letters.length
    c = Math.floor(c / letters.length)
    if (r === 0) {
      result = letters[letters.length - 1] + result
      return result
    } else {
      result = letters[c - 1] + result
    }
  }
  result = letters[c - 1] + result
  return result
};

export default convertToTitle;
