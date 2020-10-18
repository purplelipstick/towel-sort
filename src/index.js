
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (!matrix) {
    return result;
  }
  for (let arrIndex = 0; arrIndex < matrix.length; arrIndex++) {
    if (arrIndex%2===0) {
      for (let j = 0; j < matrix[arrIndex].length; j++) {
        result.push(matrix[arrIndex][j]);
      }
    } else {
      console.log(matrix[arrIndex]);
      matrix[arrIndex].reverse();
      console.log(matrix[arrIndex]);
      for (let i = 0; i < matrix[arrIndex].length; i++) {
        result.push(matrix[arrIndex][i]);
      }
    }
  }
  return result;
}

