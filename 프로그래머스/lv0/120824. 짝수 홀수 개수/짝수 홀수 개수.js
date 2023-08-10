function solution(num_list) {
    let count = [0,0];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            count[0] += 1;
        } else {
            count[1] += 1;
        }
    }
    return count
}