//cach 1//
function LongestStrings(array) {
  let arr = array
  let longest = 0
  let longestArray = []

  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length >= longest) {
      longest = arr[i].length
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if(arr[j].length === longest) {
      longestArray.push(arr[j])
    }
  }
  return longestArray
}
console.log(LongestStrings(["HUNG" ,"PHUOC" ,"BINH" ,"KHANH" ,"CAO"]))

  
// cach 2 //
function LongestStrings(array) {
  const s = array
  const m = array.map((e) => {
    return e.length}).sort((a, b) => b - a)[0]
    return s.filter((b) => {
      if (b.length === m) return b
    })
  }
  console.log(LongestStrings(["HUNG" ,"PHUOC" ,"BINH" ,"KHANH" ,"CAO"]))