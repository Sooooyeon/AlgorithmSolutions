function solution(participant, completion) {
    const myMap = new Map();
    for ( const element of participant){
        if(!myMap.get(element)){
            myMap.set(element, 1);
        
        }else{
            myMap.set(element, myMap.get(element)+1);
        }
    }
    for(const element of completion){
        if(myMap.get(element)){
            myMap.set(element, myMap.get(element)-1);
        }
    }
    for(const element of participant){
        if(myMap.get(element) >=1 ){
            let answer = element;
            return answer;
        }
    }
}