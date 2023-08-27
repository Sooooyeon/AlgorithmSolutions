function solution(score) {
    const arr = [];
    for (let i = 0; i < score.length; i++) {
        arr.push((score[i][0] + score[i][1]) / 2);
    }
    const arrSort = [...arr].sort((a, b) => (b - a));
    return arr.map(v => arrSort.indexOf(v) + 1);
}