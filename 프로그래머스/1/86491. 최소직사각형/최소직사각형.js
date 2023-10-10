function solution(sizes) {
    const w  = [];
    const h = [];

    sizes.forEach(item => {
        return item.sort((a,b)=>a-b,0)
    });

    for(let i = 0; i < sizes.length; i++){        
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
    }

    return (Math.max(...w) * Math.max(...h));
}