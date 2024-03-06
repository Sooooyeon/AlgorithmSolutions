function solution(rank, attendance) {
const ranker = rank
let attendanceStudents = rank.filter((v)=> attendance[rank.indexOf(v)] === true)
const sortedAndCut = attendanceStudents.sort((a,b) => (a-b)).slice(0,3)

return ((10000 * ranker.indexOf(sortedAndCut[0])) + (100 * ranker.indexOf(sortedAndCut[1])) + ranker.indexOf(sortedAndCut[2]))
}