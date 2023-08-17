function solution(my_string) {
    const set = new Set(my_string);
    const arr = [...set].join('');
    return arr;
}