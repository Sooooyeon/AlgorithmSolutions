function solution(s) {
    const arr = [];
    s.split(" ").map((v) => {
    if (v !== 'Z') { arr.push(Number(v)); }
    else { arr.pop() }
    return arr;
});
    return arr.reduce((a, c) => a + c, 0);
}