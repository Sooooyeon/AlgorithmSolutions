function solution(i, j, k) {
    const arr = [];
    const count = 0;
    for (let n = i; n <= j; n++) {
        arr.push(n)
    }
    return arr.toString().split('').filter(v => v === k.toString()).length;
}