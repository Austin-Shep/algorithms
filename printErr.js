function printerError(s) {
    // your code
    let num = 0,
        den = s.length
    for ( let i of s){
      if(i.charCodeAt(0) <= 0x0060 || i.charCodeAt(0) >= 0x006E) num += 1
    }
    return `${num}/${den}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))