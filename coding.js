function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j && arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}
// console.log(addToZero([1, 2, 3, -2]))
// console.log(addToZero([1, 2, 3]))
// time O(n^2)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

//   time O(n)
//   console.log(hasUniqueChars("Monday"))
//   console.log(hasUniqueChars("Moonday"))

function findLongest(arr){
    let longestword = 0
    for(let i = 0; i < arr.length; i ++){
        if(arr[i].length > longestword){
            longestword = arr[i].length
        }
    }
    return longestword
}
// console.log(findLongest(["hi", "hello"]))
// time O(n)