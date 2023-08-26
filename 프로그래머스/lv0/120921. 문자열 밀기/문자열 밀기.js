function solution(A, B) {
    let count = 0
    A = A.split("")
    while(count < A.length) {
        if(A.join("") === B) return count
        A.unshift(A.pop())
        count++
    }
    return -1
}