const wordSearch = (letters, word) => {
  const transposedMatrix = transpose(letters);
  const horizontalJoin = transposedMatrix.map(ls => ls.join(''));
  const verticalJoin = letters.map(vs => vs.join(''));
  if (letters.length === 0) {
    return false;
  }
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  return false;
};

const transpose = function(letters) {
  let resultArr = [];
  if (letters.length !== 0) {
    for (let c = 0; c < letters[0].length; c++) {
      let rowArr = [];
      for (let r = 0; r < letters.length; r++) {
        rowArr.push(letters[r][c]);
      }
      resultArr.push(rowArr);
    }
    return resultArr;
  }
  return [];
};
  
  
module.exports = wordSearch;

