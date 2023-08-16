function solution(numbers, direction) {
    const result = [];
    if(direction === "right"){
        for(let i = 1; i<numbers.length; i++){
            result[i] = numbers[i-1];
        }
        result[0] = numbers[numbers.length-1];
    } else if(direction === "left"){
        for(let j =0; j<numbers.length-1; j++){
            result[j] = numbers[j+1];
        }
        result.push(numbers[0]);
    }
    return result;
}