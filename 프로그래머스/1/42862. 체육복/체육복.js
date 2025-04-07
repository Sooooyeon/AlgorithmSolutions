function solution(n, lost, reserve){
  const count = Array(n).fill(0);
  reserve.map( v => count[v-1] = count[v-1]+ 1)
  lost.map( v => count[v-1] = count[v-1] -1)

  count.map((v,i)=>{
    if(v<0){
      if(count[i-1] > 0){
        count[i] =count[i]+ 1;
        count[i-1] =count[i-1] -1;
      } else if(count[i+1] > 0){
        count[i] =count[i]+ 1;
        count[i+1] =count[i+1] -1;
      }
    }
    return count
  })
  const answer = count.filter(v=> v>=0).length;
  return answer;
}

/* */

/*



function solution(n, lost, reserve) {
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    lost = lost.filter(v => !reserve.includes(v));
    reserve = reserve.filter(v => !lost.includes(v));

    reserve.forEach(v => {
        if (lost.includes(v - 1)) {
            lost = lost.filter(i => i !== v - 1); // 왼쪽 학생에게 빌려줌
        } else if (lost.includes(v + 1)) {
            lost = lost.filter(i => i !== v + 1); // 오른쪽 학생에게 빌려줌
        }
    });

    return n - lost.length;
}
*/