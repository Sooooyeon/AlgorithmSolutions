function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const num = age.toString().split('');
    const answer = [];
    for (let i = 0; i < num.length; i++) {
        answer.push(arr[num[i]])
    }
    return answer.join('');
}