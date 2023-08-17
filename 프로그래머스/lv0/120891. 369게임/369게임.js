function solution(order) {
    const answer = order.toString().split('').filter(v => v === "3" || v === "6" || v === "9")
    return answer.length;
}