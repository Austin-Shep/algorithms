//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;
    arr.map(i => /(\B[:;])+([\-\~]){0,1}([\)D])/g.test(i) ? count++: null)
    return count
  }

  let arr1 = [],
      arr2 = [],
      arr3 = []

console.log(countSmileys(arr1))
console.log(countSmileys(arr2))
console.log(countSmileys(arr3))