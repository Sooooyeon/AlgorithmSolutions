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