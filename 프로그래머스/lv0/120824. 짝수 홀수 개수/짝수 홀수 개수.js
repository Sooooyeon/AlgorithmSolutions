function solution(num_list) {
    let count = [0,0];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even += 1;
            count[0] = even;
        } else {
            odd += 1;
            count[1] = odd;
        }
    }
    return count
}