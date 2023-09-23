function solution(s) {
    let openCount = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (char === "(") {
            openCount++;
        } else if (char === ")") {
            openCount--;
            if (openCount < 0) {
                return false;
            }
        }
    }

    return openCount === 0;
}
