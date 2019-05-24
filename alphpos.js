function alphabetPosition(text) {
    // let alph = "abcdefghijklmnopqrstuvwxyz"
    // let ret = []
    // for ( let i of text ) {
    //   alph.includes(i.toLowerCase()) ? ret.push(alph.indexOf(i.toLowerCase()) + 1) : null
    // }
    // return ret.join(" ")

    let alph = "abcdefghijklmnopqrstuvwxyz"

    return text.split("").map(i => alph.includes(i.toLowerCase()) ? alph.indexOf(i) + 1 : null )
}

console.log(alphabetPosition("hello dog house"))