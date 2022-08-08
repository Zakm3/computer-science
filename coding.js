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
// space O(n)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

//   time O(n)
//   space O(n^2)
//   console.log(hasUniqueChars("Monday"))
//   console.log(hasUniqueChars("Moonday"))


// time O(n)
// space O(n)
const pangram = (string) => {
    return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26
};

console.log(pangram("The quick brown fox jumps over the lazy dog!"))



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
// space O(n^2)