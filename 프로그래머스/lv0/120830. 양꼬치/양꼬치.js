function solution(n, k) {
    if (parseInt(n/10) !==0){
       return 12000*n + 2000*k - 2000*parseInt(n/10); 
    }  else{
        return 12000*n + 2000*k;
    }
}