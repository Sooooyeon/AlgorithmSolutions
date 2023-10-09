// function solution(answers) {
//     let one = [];
//     let two = [];
//     let three = [];
    
//     let oneCount = 0;
//     let twoCount = 0;
//     let threeCount = 0;

//     let score = [];

    
//     for(i=0; i<answers.length/5; i++){
//         one.push(1,2,3,4,5);
//     }

//     for(i=0; i<answers.length/8; i++){
//         two.push(2,1,2,3,2,4,2,5);
//     }

//     for(i=0; i<answers.length/10; i++){
//         three.push(3,3,1,1,2,2,4,4,5,5);
//     }

//     for(i=0; i<answers.length; i++){
//         if(one[i]===answers[i]){
//             oneCount++;
//         }
//         if(two[i]===answers[i]){
//             twoCount++;
//         }
//         if(three[i]===answers[i]){
//             threeCount++;
//         }
//     }
//     score.push(oneCount);
//     score.push(twoCount);
//     score.push(threeCount);
    
//     console.log(score);

//     return score.sort((a, b) => b - a);
    
// }

// solution([1,2,3,4,5,1,2,3,2,2,4,4,5]);


function solution(answers) {

    let one = [];
    let two = [];
    let three = [];

    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;

    let score = [];
    let res = [];
    
    for(i=0; i<answers.length/5; i++){
        one.push(1,2,3,4,5);
    }

    for(i=0; i<answers.length/8; i++){
        two.push(2,1,2,3,2,4,2,5);
    }

    for(i=0; i<answers.length/10; i++){
        three.push(3,3,1,1,2,2,4,4,5,5);
    }

    for(i=0; i<answers.length; i++){
        if(one[i]===answers[i]){
            oneCount++;
        }
        if(two[i]===answers[i]){
            twoCount++;
        }
        if(three[i]===answers[i]){
            threeCount++;
        }
    }

    console.log(oneCount, twoCount, threeCount);

    score.push(oneCount);
    score.push(twoCount);
    score.push(threeCount);

    const maxScore = Math.max(...score);

    for(let i = 0; i < score.length; i++) {
        if(score[i] === maxScore){
            res.push(i + 1);
        }
    }

    return res;
}