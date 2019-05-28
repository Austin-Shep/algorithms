//comapare 2 arrays, (a, b) to see if "b" conatains the results of squaring each of "a"s elements

function comp(a, b) {
    //your code here
    // console.log(a, b)
    let mapA = {},
        mapB = {};
    if (a === null || b === null) return false;
    if (a === [] && b === []) return false;
    for (let i of a ){
        if(!b.includes(Math.pow(i, 2))) return false  
        mapA[i] = mapA[i] + 1 || 1
    }
    for(let i of b ){
        if(!a.includes(Math.sqrt(i))) return false
        mapB[i] = mapB[i] + 1 || 1
    }
    console.log(mapA,mapB)
    for (let key in mapA){
        // console.log(`
        //     key: ${key}, 
        //     mapA[key](val): ${mapA[key]},   
        //     mapB || keySquared: ${mapB[Math.pow(key, 2)]}
        //     res(eval neg): ${mapA[key] !== mapB[Math.pow(key, 2)]}
        //     `)
        if(mapA[key] !== mapB[Math.pow(key, 2)]) return false
    }
    return true
}
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a1, a2))
// console.log(comp([1, 5, 3], []))
// console.log(comp([1, 5, 3], [1, 25, 6]))