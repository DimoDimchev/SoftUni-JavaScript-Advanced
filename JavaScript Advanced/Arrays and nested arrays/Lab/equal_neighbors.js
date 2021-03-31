function solveProblem(matrix) {
    let result = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let i = 0; i < matrix[row].length; i++) {
            if (matrix[row][i] === matrix[row + 1][i]) {
                result++;
            }
            if (matrix[row][i] === matrix[row][i + 1]) {
                result++;
            }
            if (row === matrix.length - 2 && matrix[row + 1][i] === matrix[row + 1][i + 1]) {
                result++;
            }
        }
    }
    return result;
}

// console.log(solveProblem([[2, 2, 5, 7, 4]
// ,[4, 0, 5, 3, 4],
// [2, 5, 5, 4, 2]]));