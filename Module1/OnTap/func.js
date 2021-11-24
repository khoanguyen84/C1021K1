function createMatrix(size, min, max){
    let matrix =[];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    return matrix;
}

function calcEvenValues(matrix){
    let size = matrix.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (matrix[i][j] % 2 == 0) {
                total += matrix[i][j];
            }
        }
    }
    return total;
}

function totalValuesInPrimary(matrix){
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        total += matrix[i][i];
    }
    return total;
}

function totalValuesInSecondary(matrix){
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        total += matrix[i][size - i - 1];;
    }
    return total;
}

function main(){
    let size = 5;
    let min = 10;
    let max = 90;
    let matrix = createMatrix(size, min, max);
    console.log('matrix', matrix);
    console.log('Total of even values in matrix: ', calcEvenValues(matrix));
    console.log('Total of values in primary: ', totalValuesInPrimary(matrix));
    console.log('Total of values in secondary: ', totalValuesInSecondary(matrix));
}

main();