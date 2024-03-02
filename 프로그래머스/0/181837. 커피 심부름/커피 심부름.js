function solution(order) {
  let latte = 0;
  order.map((v)=>{
    if(v.includes("latte")){
      latte ++;
    }
  })
  return (latte * 5000 + (order.length - latte) * 4500);
}