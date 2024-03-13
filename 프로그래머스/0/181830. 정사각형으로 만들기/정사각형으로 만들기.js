function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  const arrLength = rows > cols ? rows : cols;

  const rect = new Array(arrLength).fill(0);
  for(let i = 0; i < arrLength; i++){
    rect[i] = new Array(arrLength).fill(0);
  }

  for(i = 0; i < rows; i++){
    for(j = 0; j < cols; j++){
      rect[i][j] = arr[i][j];
    }
  }

  return rect;
}