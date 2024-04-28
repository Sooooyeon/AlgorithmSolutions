function solution(s) {
    let answer = s;
    let arrNum = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    for(let i = 0; i<10; i++){
        answer = answer.replace(arrNum[i],i)
    }
    return parseInt(answer);
}