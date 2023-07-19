const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`);
});

//  코드	표시(출력)
//  \'	 작은 따옴표
//  \"	 큰 따옴표
//  \\	 백슬래시
//  \n	 줄 바꿈
//  \r	 캐리지 리턴(CR)
//  \t	 탭(TAB)
//  \b	 백스페이스
// \f	폼피드(FF)