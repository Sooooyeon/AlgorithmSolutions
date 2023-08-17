function solution(rsp) {
    const answer = [];
    const sp = rsp.split('');
    for(let i =0; i<rsp.length; i++){
        sp[i] ==="2" ? answer[i] = "0" : sp[i] ==="0" ? answer[i] = "5" : answer[i] = "2"
    }
    return answer.join('');
}