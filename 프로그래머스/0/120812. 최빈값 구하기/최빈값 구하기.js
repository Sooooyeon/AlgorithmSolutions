function solution(array) {
  let answer = 0;
  const obj = {};

  array.map((item)=>{
    if(Object.keys(obj).includes(`${item}`)){
      obj[`${item}`] = obj[`${item}`] + 1;
    } else {
      obj[`${item}`] = 1;
    }
  })
  console.log(obj)
  const values = Object.values(obj);

  const sortValues = values.sort(function (a, b) { return b - a;})
  if(sortValues[0] !== sortValues[1]){
    const key = parseInt(Object.keys(obj).find((item)=>obj[item] === sortValues[0]))
    answer = key
    console.log(answer)
  } else {
    answer = -1;
    console.log(answer)
  }

  return answer;
}